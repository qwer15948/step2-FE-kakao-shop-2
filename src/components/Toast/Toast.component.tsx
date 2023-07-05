import { FC } from "react";
import { Toast as ToastType, useToast } from "@/hooks/useToast";

interface ToastProps extends Omit<ToastType, "timeout"> {
  index: number;
}

const Toast: FC<ToastProps> = ({
  id,
  title,
  message,
  type = "succes",
  index,
}) => {
  const { removeToast } = useToast();

  return (
    <div
      className={`toast toast-${type}`}
      style={{
        transform: `translateY(calc(${index * 100}% + ${index * 1}rem)`,
      }}
    >
      <img src={`/toast/${type}.svg`} alt="alert" />
      <div className="title">{title}</div>
      <div className="message">{message}</div>
      <button onClick={() => removeToast(id)}>
        <img src="/multiply.svg" alt="close" />
      </button>
    </div>
  );
};

export default Toast;
