import cx from "classnames";
interface ButtonProps {
  title: string;
  btnGet?: boolean;
  btnRead?: boolean;
  textWhite?: boolean;
}

export default function Button(props: ButtonProps) {
  const { title, btnGet, btnRead, textWhite } = props;
  const className = cx({
    btn: true,
    "btn-get": btnGet,
    "btn-read": btnRead,
    "text-lg": true,
    "text-white": textWhite,
    "rounded-pill": true,
  });

  return (
    <a className={className} href="#" role="button">
      {title}
    </a>
  );
}
