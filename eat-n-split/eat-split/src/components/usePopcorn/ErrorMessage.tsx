import {JSX} from "react";

interface ErrorMessageProps {
    message: string;
  }
export function ErrorMessage({message}:ErrorMessageProps):JSX.Element {
    return (
            <p className='error'>
                <span>⛔</span>{message}
            </p>
    );
}