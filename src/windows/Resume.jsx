import { WindowsControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf'
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowsControls target="resume" /> 
        <h2>Resume.pdf</h2>

        <a 
          href="files/Kai_Resume.pdf"
          download
          className="cursor-pointer"  
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/Kai_Resume.pdf">
        <Page 
        pageNumber={1} 
        rendedTextLayer 
        renderAnnotationLayer 
        />
      </Document>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow