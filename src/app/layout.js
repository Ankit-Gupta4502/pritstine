import Layout from "@/components/Layout/Layout"
import "./globals.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "@/http"
import "react-datepicker/dist/react-datepicker.css";
import { LayoutContext } from "@/context/LayoutContext";
import QueryWrapper from "@/react-query"
export const metadata = {
  title: 'Pristine Medical',
  metadataBase: new URL('https://sea-turtle-app-uj48e.ondigitalocean.app'),
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <QueryWrapper>
          <LayoutContext>
            <Layout>
              {children}
            </Layout>
          </LayoutContext>
        </QueryWrapper>
      </body>
    </html>
  )
}
