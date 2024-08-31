import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://1drv.ms/b/c/e80a43ca4ad9b72b/EUmq1QW4dX1FjZ1Jqg8esucBZVfW8_LypSROjYnKSI4PYQ?e=gHikyg" download="ZemZemKhiar_resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume