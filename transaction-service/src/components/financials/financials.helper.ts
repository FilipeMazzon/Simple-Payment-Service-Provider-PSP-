const dayInTimestamp = (60 * 60 * 24 * 1000);//1 day
export const calculateFee = async (type: string, installments: number, value: number): Promise<number> => {
    try {
        if (type === "debit" && installments === null) {
            return value * (1 - 0.028)
        } else if (type === "credit" && installments === null) {
            return value * (1 - 0.032)
        } else if (type === "installment_credit") {
            if (installments >= 2 && installments <= 6) {
                return value * (1 - 0.038)
            } else if (installments > 6 && installments <= 12) {
                return value * (1 - 0.042)
            } else {
                Promise.reject("invalid installments");
            }
        } else {
            Promise.reject("invalid type");
        }
    } catch (e) {
        throw "something go wrong";
    }
};

export const getStatus = async (type: string = ""): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (type === "debit") {
            resolve("received");
        } else if (type === "credit" || type === "installment_credit") {
            resolve("expected");
        } else {
            reject("invalid type");
        }
    })

};

export const getReceivedDate = async (type: string, installments: number = null): Promise<any> => (
    new Promise((resolve, reject) => {
        if (type === "debit" && installments === null) {
            resolve(Date.now())
        } else if (type === "credit" && installments === null) {
            resolve(Date.now() + 30 * dayInTimestamp)
        } else if (type === "installment_credit" && installments >= 2 && installments <= 12) {
            resolve(Date.now() + 30 * installments * dayInTimestamp)
        } else {
            reject("invalid type");
        }
    })
);
