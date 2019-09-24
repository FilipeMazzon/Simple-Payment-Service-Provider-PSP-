import {IsNotEmpty, IsNumber, IsPositive, IsString, ValidateNested, NotEquals} from 'class-validator';
import {CreateCardDto} from './createCard.dto';

export class CreateTransactionDTO {
    constructor(builder) {
        this.value = builder.value;
        this.description = builder.description;
        this.type = builder.type;
        this.installments = builder.installments;
        this.card = builder.card;
    }

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsNumber({}, {message: 'Campo precisa ser numerico'})
    @IsPositive({message: 'Campo precisa ser positivo'})
    value: number;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    description: string;

    @IsNotEmpty({message: 'Campo obrigatório'})
    @IsString({message: 'Campo precisa ser string'})
    type: string;

    @NotEquals(undefined, {message: 'campo precisa existir'})
    installments: number;

    @IsNotEmpty({message: 'campo obrigatorio'})
    @ValidateNested()
    card: CreateCardDto;
}
