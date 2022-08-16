interface StepItemProps {
  icon: "step1" | "step2" | "step3";
  title: String;
  text1: String;
  text2: String;
}

export default function StepItem(props: StepItemProps) {
  const { icon, title, text1, text2 } = props;
  return (
    <>
      <div className="col-lg-4">
        <div className="card feature-card border-0">
          <img src={`/icon/${icon}.svg`} height={80} width={80} />
          <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
          <p className="text-lg color-palette-1 mb-0">
            {text1}
            <br />
            {text2}
          </p>
        </div>
      </div>
    </>
  );
}
