import {IsNotEmpty, IsNumber, IsPositive, IsString, Min, Max, Length} from 'class-validator';

export class Financial {
    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    status: string;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsNumber({}, {message: 'Campo precisa ser string'})
    received_date: number;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsNumber({}, {message: 'Campo precisa ser string'})
    amount: number;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    client: string;
}
