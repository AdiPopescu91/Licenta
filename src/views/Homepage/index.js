import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import { injectIntl, intlShape } from 'react-intl';



import { withStyles } from '@material-ui/core';




/**
 * index
 */
function Homepage(props) {
    const { classes } = props;



    return (
        <div className={classes.index}>
            Hello world!
        </div>
    )



}



export default Homepage;