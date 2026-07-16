import { WindowsControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window"

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if(!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowsControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="window-body p-4 space-y-4 bg-white overflow-y-auto max-h-96">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto object-contain rounded" />
          </div>
        ) : null}

        {subtitle ? <h3 className="text-base font-semibold">{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-2.5 leading-relaxed text-sm text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;