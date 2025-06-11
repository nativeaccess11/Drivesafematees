import { Fira_Sans, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: 'DriveSafe Mate Driving School',
    default: 'DriveSafe Mate Driving School',
    template: '%s | DriveSafe Mate Driving School',
  },
  description: 'DriveSafe Mate Driving School - Learn to drive with confidence and safety. Professional driving lessons tailored to your needs.',
  openGraph: {
    title: 'DriveSafe Mate Driving School',
    description: 'Learn to drive with confidence and safety at DriveSafe Mate Driving School. Professional instructors and flexible scheduling options.',
    image: '/assets/images/openGraphImage.jpg', // Update with your actual image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="DriveSafe Mate Driving School" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${fira_sans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}