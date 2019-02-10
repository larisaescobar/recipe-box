import NextHead from 'next/head';

const Head = props => (
    <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Muli|Rokkitt|Poppins" rel="stylesheet" />
    </NextHead>
)

export default Head; 