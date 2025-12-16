**Problem:**  
I have a video in my public folder of an next.js app router project with a name ** "Hyku-Video-Animation" **. And I want to use it in my some component via Video tag. 
But instead of showing the video, the nextjs renders the 404 Not Found page in the browser. The default page for an improper route.  
So the actual root cause of the above problem is as follows:  
** Your App Router setup + not-found.tsx is taking precedence over static asset resolution in dev, and every unknown URL (including .mp4) is being rendered as a page.**  
That’s why:
/Hyku-Video-Animation.mp4
/videos/Hyku-Video-Animation.mp4

👉 both render your Work in Progress page instead of serving the file.

This is an edge-case bug/behavior that appears in App Router dev mode when:

1) src/app is used
2) not-found.tsx exists
3) route groups are present
4) no traditional pages/ router exists
