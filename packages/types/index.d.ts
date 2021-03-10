export declare namespace App {
    type buttonTypes = 'submit' | 'button' | 'reset';
    type supportedInputTypes =
        | 'text'
        | 'password'
        | 'email'
        | 'tel'
        | 'checkbox'
        | 'radio';
    type supportedSizes = 'sm' | 'md' | 'lg';
    type supportedTargetTypes = '_blank' | '_self' | '_parent' | '_top';
    interface IConnectionSettings {
        user: string;
        password: string;
        port: number;
        host: string;
        database: string;
    }
    interface IUser {
        username: string;
        email: string;
        password: string;
    }
}
