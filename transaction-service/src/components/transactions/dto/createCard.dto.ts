import {IsNotEmpty, IsNumber, IsPositive, IsString, Min, Max, Length} from 'class-validator';

export class CreateCardDto {
    constructor(builder) {
        this.number = builder.number;
        this.expiry = builder.expiry;
        this.cvv = builder.cvv;
        this.holder = builder.holder;
    }

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    @Length(16,16,{message: 'Campo precisa ter 16 digitos'})
    number: string;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    expiry: string;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    @Length(3, 3)
    cvv: string;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo necessita ser string'})
    holder: string;
}
