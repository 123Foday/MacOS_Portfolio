import { WindowsControls } from "#components"
import { gallery, photosLinks } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
import { Mail, Search } from "lucide-react"


const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowsControls target="photos" />

        <div className="flex w-full items-center justify-end gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <div className="gallery-header">
            <div>
              <h3>Album</h3>
              <p>Recent memories</p>
            </div>
          </div>

          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    imageUrl: img,
                  })
                }
              >
                <img src={img} alt={`Gallery Image ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow