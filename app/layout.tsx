import { ThemeProvider } from '@/theme';
import './global.css'
import Layout from "@/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
    </html>
  )
}
