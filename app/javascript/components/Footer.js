import * as React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

export default function Footer() {
    return (
        <>
            <Box px= {{ xs:1, sm: 3 }} py= {{ xs:1, sm:3 }} sx={{ boxShadow: 3 }}>
                <Container maxwidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <Box>
                                Dacty  &reg; {new Date().getFullYear()}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ fontWeight: 'bold' }} >
                                ヘルプとお問い合わせ
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    お問い合わせ
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    利用規約
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    プライバシポリシー
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ fontWeight: 'bold' }}>
                                会社とサービス
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Dactyについて
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    運営会社
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}