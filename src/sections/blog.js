import { ReactTinyLink } from "@artshell/react-tiny-link";
import { Card, CardContent, Typography } from '@mui/material';

function Blog() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Blog
            </Typography>
            <Typography>We at BajaInnoTech have been active in multiple fronts, playing a role as active participants in the technology industry.</Typography>
            <br />
            <Typography variant="h5">List of Entries</Typography>
            <br />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Error boundaries in React (Part 2)</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Hyunjin Oh</Typography>
                    <Typography>A continuation of the first article on error boundaries, it describes strategic error boundary placement and some advanced patterns.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://medium.com/bajainnotech/error-boundaries-in-react-part-2-3acbe005488d"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Playing with Markdown - Fires In the Crypt - Solo Play Options</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>An adaptation of a roleplay adventure for a system known as Orcus RPG. We learned about Open-Licenses and improved our skills with markdown while developing this.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Handling Prisma & Zenstack-v2 errors in ElysiaJS with Better-Prisma-Errors</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>It describes how to use the Better Prisma Errors library. This article is focused on usage for Bun/ElysiaJS developers.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://medium.com/bajainnotech/handling-prisma-zenstack-v2-errors-in-elysiajs-with-better-prisma-errors-121e1fb4c668"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Updating Better-Prisma-Errors TS library</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                    <Typography>Describes the strategic thinking process behind choosing to update unmaintained code, and the many implications of sharing and maintining a public repository.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://medium.com/bajainnotech/updating-better-prisma-errors-ts-library-1547844c76e3"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">We launched our first public access repository</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral & Hyunjin Oh</Typography>
                    <Typography>This library was updated, made compatible with Bun, and extended to cover a wider array of errors.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://github.com/BajaInnoTech/prisma-better-errors"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">MUI Style debugging: Your CSS not applying!</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Hyunjin Oh</Typography>
                    <Typography>This article explains why MUI often ignores styling, and how to handle these situations.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://medium.com/bajainnotech/mui-style-debugging-your-css-not-applying-b13c4314fa75"
                    />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">Error boundaries in React… protect your app!</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Hyunjin Oh</Typography>
                    <Typography>This article mechanims to address web-site wide system crashes.</Typography>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://medium.com/bajainnotech/error-boundaries-in-react-protect-your-app-e87205fb3db3"
                    />
                </CardContent>
            </Card>
        </>
    );
}

export default Blog;