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

      <div className="window-body overflow-y-auto bg-white p-4">
        <div className="flex flex-wrap items-start gap-4 md:flex-nowrap">
          {image ? (
            <div className="w-full shrink-0 md:w-48 lg:w-56">
              <img src={image} alt={name} className="h-auto w-full rounded-lg object-cover shadow-sm" />
            </div>
          ) : null}

          <div className="min-w-0 flex-1 space-y-3">
            {subtitle ? <h3 className="text-base font-semibold text-gray-800">{subtitle}</h3> : null}

            {Array.isArray(description) && description.length > 0 ? (
              <div className="space-y-2.5 text-sm leading-relaxed text-gray-700">
                {description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;