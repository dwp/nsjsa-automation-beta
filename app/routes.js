const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/agent/stage/1a/', require('./views/agent/stage/1a/_routes'))
router.use('/agent/stage/1a/1-eligibility/', require('./views/agent/stage/1a/1-eligibility/_routes'))
router.use('/agent/stage/1a/2-details/', require('./views/agent/stage/1a/2-details/_routes'))
router.use('/agent/stage/1a/3-claim-start/', require('./views/agent/stage/1a/3-claim-start/_routes'))
router.use('/agent/stage/1a/4-other-benefits/', require('./views/agent/stage/1a/4-other-benefits/_routes'))
router.use('/agent/stage/1a/5-jury-service/', require('./views/agent/stage/1a/5-jury-service/_routes'))
router.use('/agent/stage/1a/6-current-employment/', require('./views/agent/stage/1a/6-current-employment/_routes'))
router.use('/agent/stage/1a/7-previous-employment/', require('./views/agent/stage/1a/7-previous-employment/_routes'))
router.use('/agent/stage/1a/8-abroad/', require('./views/agent/stage/1a/8-abroad/_routes'))
router.use('/agent/stage/1a/9-pensions/', require('./views/agent/stage/1a/9-pensions/_routes'))
router.use('/agent/stage/1a/10-education/', require('./views/agent/stage/1a/10-education/_routes'))
router.use('/agent/stage/1a/dth/', require('./views/agent/stage/1a/dth/_routes'))

router.use('/agent/stage/4/', require('./views/agent/stage/4/_routes'))
router.use('/agent/stage/3/', require('./views/agent/stage/3/_routes'))
router.use('/agent/stage/2b/', require('./views/agent/stage/2b/_routes'))
router.use('/agent/stage/2a/', require('./views/agent/stage/2a/_routes'))
router.use('/agent/stage/1b/', require('./views/agent/stage/1b/_routes'))
router.use('/agent/stage/shared/', require('./views/agent/stage/shared/_routes'))

router.use('/sprint3/', require('./views/sprint3/_routes'))


router.use('/sprint4/', require('./views/sprint4/_routes'))
router.use('/sprint4/1-eligibility/', require('./views/sprint4/1-eligibility/_routes'))
router.use('/sprint4/2-details/', require('./views/sprint4/2-details/_routes'))

router.use('/sprint5/', require('./views/sprint5/_routes'))
router.use('/sprint5/i3/', require('./views/sprint5/i3/_routes'))

router.use('/sprint7/', require('./views/sprint7/_routes'))

router.use('/sprint9/additional/', require('./views/sprint9/additional/_routes'))

// router.use('/agent/stage/1a/3-claim-start/', require('./views/agent/stage/1a/3-claim-start/_routes'))
// router.use('/agent/stage/1a/4-other-benefits/', require('./views/agent/stage/1a/4-other-benefits/_routes'))
// router.use('/agent/stage/1a/5-jury-service/', require('./views/agent/stage/1a/5-jury-service/_routes'))
// router.use('/agent/stage/1a/6-current-employment/', require('./views/agent/stage/1a/6-current-employment/_routes'))
// router.use('/agent/stage/1a/7-previous-employment/', require('./views/agent/stage/1a/7-previous-employment/_routes'))
// router.use('/agent/stage/1a/8-abroad/', require('./views/agent/stage/1a/8-abroad/_routes'))
// router.use('/agent/stage/1a/9-pensions/', require('./views/agent/stage/1a/9-pensions/_routes'))
// router.use('/agent/stage/1a/10-education/', require('./views/agent/stage/1a/10-education/_routes'))
// router.use('/agent/stage/1a/dth/', require('./views/agent/stage/1a/dth/_routes'))

module.exports = router
