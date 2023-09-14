import { IUserData } from 'src/types/userData'

export interface IFormControlResult {
    formData: IUserData;
    handleInputChange: (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    handleButtonClick: () => void;
}