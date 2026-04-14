import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
// import PeopleIcon from '@mui/icons-material/People';

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
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/the-confusing-and-frustrating-process-of-creating-an-online-identity-ded4ffd1c365" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center", }}
                        />
                        <Box>
                            <Typography variant="h6">The Confusing and Frustrating Process of Creating an Online Identity</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                            <Typography>An online presence is a prerequisite for a scalable product rollout. It helps develop exposure, build trust, grow a community and understand the needs of your customers. However, beyond the market research, branding and promos, getting started or even remaining on a platform now requires dealing with bot traffic prevention measures.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://bitmysteries.itch.io/depthrangers" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <CasinoIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">Recreation as a means of testing a complete product rollout - DepthRangers RPG System </Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                            <Typography>We have our first official BajaInnoTech product rollout via our recreation division, BIT Mysteries. It's an RPG System licensed under Creative Commons 4.0 Attribution- ShareAlike License. One of the key goals for this endeavor was to learn about Product Placement, preparing us for our upcoming Visionary Planner rollout. We also deepened our markdown knowledge, testing many edge cases. One of these are the particulars of its HTML & PDF rendering, as well as the limits of GitHub markdown.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/a-bit-of-fun-and-a-lot-of-legalese-creative-commons-rpgs-and-gnuv3-3e32628fa454" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center", }}
                        />
                        <Box>
                            <Typography variant="h6">A bit of fun and a lot of legalese: Creative Commons, RPGs and GNUv3</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                            <Typography>What happens when you wish to develop software that bridges CC sources and original material? What are some of the risks? How should you configure your repository to be compliant? This article attempts to look at different strategies to solve these questions.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/error-boundaries-in-react-part-2-3acbe005488d" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">Error boundaries in React (Part 2)</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Hyunjin Oh</Typography>
                            <Typography>A continuation of the first article on error boundaries, it describes strategic error boundary placement and some advanced patterns.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://github.com/BajaInnoTech/fires-in-the-crypt-solo-play-options" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <CasinoIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">Playing with Markdown - Fires In the Crypt - Solo Play Options</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                            <Typography>An adaptation of a roleplay adventure for a system known as Orcus RPG. We learned about Open-Licenses and improved our skills with markdown while developing this.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/handling-prisma-zenstack-v2-errors-in-elysiajs-with-better-prisma-errors-121e1fb4c668" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">Handling Prisma & Zenstack-v2 errors in ElysiaJS with Better-Prisma-Errors</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                            <Typography>It describes how to use the Better Prisma Errors library. This article is focused on usage for Bun/ElysiaJS developers.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/updating-better-prisma-errors-ts-library-1547844c76e3" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">Updating Better-Prisma-Errors TS library</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral</Typography>
                            <Typography>Describes the strategic thinking process behind choosing to update unmaintained code, and the many implications of sharing and maintining a public repository.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://github.com/BajaInnoTech/prisma-better-errors" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">We launched our first public access repository</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Eduardo del Corral & Hyunjin Oh</Typography>
                            <Typography>This library was updated, made compatible with Bun, and extended to cover a wider array of errors.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/mui-style-debugging-your-css-not-applying-b13c4314fa75" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                            <Typography variant="h6">MUI Style debugging: Your CSS not applying!</Typography>
                            <Typography gutterBottom sx={{color:"secondary.dark"}}>Hyunjin Oh</Typography>
                            <Typography>This article explains why MUI often ignores styling, and how to handle these situations.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom:1}}>
                <CardContent>
                    <Box color="primary.dark" component="a" href="https://medium.com/bajainnotech/error-boundaries-in-react-protect-your-app-e87205fb3db3" sx={{ display:"flex", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon
                            sx={{ fontSize:100, mr: 2, width:40, alignSelf:"center", justifyContent:"center" }}
                        />
                        <Box>
                    <Typography variant="h6">Error boundaries in React… protect your app!</Typography>
                    <Typography gutterBottom sx={{color:"secondary.dark"}}>Hyunjin Oh</Typography>
                    <Typography>This article mechanisms to address web-site wide system crashes.</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}

export default Blog;