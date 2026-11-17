import Box from '@mui/joy/Box'
import {
    ChatIcon,
    DotsThreeVertical,
    Heart,
    SealCheckIcon,
    ShareIcon,
} from '@phosphor-icons/react'

export function Post({ post, palette }) {
    return (
        <Box
            sx={{
                width: '100%',
                p: '20px',
                borderRadius: '24px',
                bgcolor: palette.postBackground,
                color: palette.text,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'start', gap: '8px' }}>
                <Box
                    component="img"
                    src={post.avatar}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sx={{
                        width: '40px',
                        height: '40px',
                        flexShrink: 0,
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
                <Box sx={{ minWidth: 0 }}>
                    <Box
                        component="div"
                        sx={{
                            fontFamily: "'Inter', Georgia, serif",
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <div>
                            {post.name}
                        </div>
                        {post?.verified && (
                            <Box sx={{
                                width: '15px',
                                height: '15px',
                                '& svg': {
                                    fill: palette.verifiedColor,
                                    width: '15px',
                                    height: '15px'
                                }
                            }}>
                                <SealCheckIcon weight="fill" />
                            </Box>
                        )}
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            color: palette.postMutedText,
                            fontFamily: "'Inter', Georgia, serif",
                            fontSize: '12px',
                            lineHeight: 1.3,
                        }}
                    >
                        {post.time}
                    </Box>
                </Box>
                <Box
                    component="span"
                    sx={{
                        display: 'inline-flex',
                        ml: 'auto',
                        color: palette.postMutedText,
                        flexShrink: 0,
                    }}
                >
                    <DotsThreeVertical size={20} weight="bold" />
                </Box>
            </Box>

            <Box
                component="div"
                sx={{
                    mt: '14px',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    lineHeight: 1.55,
                }}
            >
                <div dangerouslySetInnerHTML={{ __html: post.text }} />
            </Box>

            {post.images.length > 0 ? (
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        mt: '14px',
                    }}
                >
                    {post.images.map((src) => (
                        <Box
                            key={src}
                            component="img"
                            src={src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            sx={{
                                display: 'block',
                                width: '120px',
                                height: '120px',
                                borderRadius: '12px',
                                objectFit: 'cover',
                            }}
                        />
                    ))}
                </Box>
            ) : null}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    mt: '16px',
                    color: palette.postMutedText,
                }}
            >
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Heart size={18} weight="regular" />
                    <Box component="span" sx={{ fontSize: '12px' }}>
                        {post.likes}
                    </Box>
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <ChatIcon size={18} weight="regular" />
                    <Box component="span" sx={{ fontSize: '12px' }}>
                        {post.replies}
                    </Box>
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <ShareIcon size={18} weight="regular" />
                </Box>
            </Box>
        </Box>
    )
}

export function FeedGroup({ posts: groupPosts, hidden, palette }) {
    return (
        <Box
            aria-hidden={hidden ? 'true' : undefined}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flexShrink: 0,
            }}
        >
            {groupPosts.map((post) => (
                <Post
                    key={post.name + post.time}
                    post={post}
                    palette={palette}
                />
            ))}
        </Box>
    )
}
