import "@styles/globals.css";

export const metadata = {
  title: "Frederick Bruce Portfolio",
  description: "Personal Website",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
