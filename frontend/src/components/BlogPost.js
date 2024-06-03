import { Image } from "@chakra-ui/image"
import { Box, Flex, HStack, VStack } from "@chakra-ui/layout"
import React from "react"

function BlogPost() {
    return (
        <Flex w="100vw" h="100vh" bgColor="white" justifyContent="center">
                <VStack margin="70px 300px 100px 300px">
            <Image src="blogpost/IMG_1163.jpeg" alt="" w="100%" h="50vh" objectFit="cover" objectPosition="center"/>
            <Box>
                    <Box>
                    <p className="metal-regular">April 11, 2024</p>
                    <h1 className="poppins-bold" style={{fontSize: "40px", marginTop: "0", marginBottom:"0"}}>My First Blog Post</h1>
                    <h2 className="metal-regular" style={{marginTop: "0", marginBottom:"40px", fontSize: "22px"}}>Who am I and why did I create this blog?</h2>
                    <p className="poppins-regular">Hi.</p>
                    <p className="poppins-regular">Welcome to the Kyleigh Chronicles.</p>
                    <h2 className="poppins-bold">Who am I?</h2>
                    <p className="poppins-regular">I’m Kyleigh, the creator, writer, editor and developer of this entire website!</p>
                    <p className="poppins-regular">At the time of writing, I’m currently 21 years old and in my third year of university. I’m currently studying Systems Design Engineering at the University of Waterloo and plan to pursue a career in the tech industry. I’ll be posting about my school and work journey on this blog!</p>
                    <p className="poppins-regular">Outside of work and school, I love creating things. I grew up loving arts and crafts, such as DIY bracelets and duct tape wallets. A few years ago, I picked up crocheting as a way to continue cultivating this interest, and I’d like to eventually share more about my creations!</p>
                    <p className="poppins-regular">Aside from DIY crafts, I also enjoy recording videos and editing them. In fact, I wanted to be a YouTuber when I was younger, as I’m sure many of us who grew up with YouTube did. To this day, I still make videos and plan on making even more! My content is based solely on things such as my day-to-day life and my travel adventures, so if you’re interested in that, you should check out my YouTube channel.</p>
                    <p className="poppins-regular">Speaking of creating things, I created this entire website from scratch! I designed it myself using Figma, programmed the website using React, tracked its production using Notion, and make sure to use my own photographs! But don’t worry, this isn’t all. I’ll still be updating this website over time, making it even more glamorous. Although I have experience creating and developing websites in the past, I’m using this website as a means to learn more about web development and to deepen my understanding of the fundamentals. Therefore, this site will be under continuous development, all while I continue to create blog posts! </p>
                    <p className="poppins-regular">One last thing you should know about me: I’m a gamer! I’ve been playing video games since a young age, starting with some games on the Wii and Xbox, and eventually became a devout PC gamer at about the age of 10. Though I don’t play video games as much as I did back then, I’m currently in a phase where I mostly play League of Legends and Fortnite. Though I don’t plan on writing much about gaming, I still think that it’s such an integral part of who I am that it had to be mentioned in my introduction.</p>
                    <p className="poppins-regular">I’m sure I’m probably leaving out more information about myself, but I’ll be yapping about myself much more in the future anyway.</p>
                    <p className="poppins-regular">It’s nice to meet you, dear reader! ;)</p>
                    <h2 className="poppins-bold">Why did I create a blog?</h2>
                    <p className="poppins-regular">Although I’m not a content creator, I love sharing my experiences and posting about them. And so, I wanted to create a platform that is just mine, where I make the rules and I get to talk about whatever I want. But of course, that’s not the only reason I created this website.</p>
                    <p className="poppins-regular">I’ve always had a creative side of me that loves writing, but I never really put time and effort into fostering those interests. The few times that I did, I found myself overcome with writer’s block and lost motivation quickly because I never felt like what I wrote was “good enough.” Actually, as I write this, I find myself struggling just as I did back then. But this time, I won’t give up as easily. I want to learn how to persevere through my struggles, to put aside my perfectionism for once and be okay with not being completely satisfied with my work. This is my website, after all. </p>
                    <p className="poppins-regular">So, I created this blog to help me grow and to finally nurture my passion for writing, whilst learning to overcome mental blockers. Everyone has a reason for creating their blog. In my case, that reason was to reach some goals.</p>
                    <p className="poppins-regular">First of all, I want to improve my communication skills. I feel as though I’ve always struggled with communication, whether it’s not being able to find the right words to use, or because I have a slight tendency to stutter on my words. I want to use this blog as a way to expand my vocabulary and improve my writing skills. As you can tell, I’m not a terrible writer. But I’m definitely not great - at least, I don’t think I am just yet. I can acknowledge that I am able to communicate quite well through written text, but I definitely have some room for improvement.</p>
                    <p className="poppins-regular">Another one of my goals is to become more comfortable and confident expressing myself. I have so many things that I want to share and talk about but have never felt comfortable doing so. I decided that creating a blog that is completely mine would allow me to create my own content that doesn’t need to conform to any social norms or expectations of a platform. I plan on having a deeper discussion on this in a future blog post, where I talk about my struggles with confidence and sharing things on social media so stay tuned for that!</p>
                    <p className="poppins-regular">As you already know, I coded this website myself. I’ve always wanted to use my coding skills to create a project that I’m passionate about. When I started to pursue engineering, I was always told to “make a project” but could never think of something that I really wanted to spend time and work on. This may be more of a “passion project” than a “skill project,” but I think that passion projects are much more valuable. I am truly passionate about what I learn and how I grow, and that is what this site is all about. Someday I want to be able to look back on what I’ve written and what I’ve created and see how far I’ve come. That is why I created this blog.</p>
                    <h2 className="poppins-bold">Conclusion</h2>
                    <p className="poppins-regular">I really appreciate you taking the time to read my first blog post in its entirety and getting to know me. Although I am primarily creating this website as a means to grow as an individual, I hope that there’s someone out there who finds some motivation or comfort in reading about my experiences. Come along on my journey!</p>
                    <p className="poppins-regular">Here’s to the beginning of the Kyleigh Chronicles! 🥂</p>
                    </Box>
            </Box>
                </VStack>
        </Flex>
    )
}

export default BlogPost