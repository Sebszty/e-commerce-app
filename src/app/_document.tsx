import type {Metadata} from 'next'
import {Head, Html, Main, NextScript} from 'next/document'

export const metadata: Metadata = {
    title: 'E-commerce-app',
    description: 'Impact example e-commerce app',
}

const Document = (): JSX.Element => {
    return (
        <Html suppressHydrationWarning>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
