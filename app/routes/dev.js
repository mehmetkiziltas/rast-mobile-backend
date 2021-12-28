const controller = require('../controllers/dev');
const router = express.Router();

router.get('/version', controller.version);

module.exports = router;