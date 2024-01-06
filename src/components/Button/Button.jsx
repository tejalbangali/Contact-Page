import styles from "./Button.module.css";

function Button(props) {
  const { text, icon, isOutline, ...rest } = props;

  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
