import React from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

    if(!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infectés</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleDateString('fr-FR', options)}</Typography>
                        <Typography variant='body2'>Nombre de cas actifs de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Récupérés</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleDateString('fr-FR', options)}</Typography>
                        <Typography variant='body2'>Nombre de récupérations de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Décès</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleDateString('fr-FR', options)}</Typography>
                        <Typography variant='body2'>Nombre de décès causés par le COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards