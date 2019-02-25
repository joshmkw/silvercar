
const visitorMap = {};

async function getSum(req, res) {
    let sum = 0;
    let reqKey = req.params.key;

    try {
        visitorMap[reqKey].forEach( (obj) => {
            sum += obj.value;
        });

        return res.status(200).send(`${sum}`);
    } catch (error) {
        return res.status().send({ error: error.message, status: error.statusCode });
    }
}

async function postVisitor(req, res) {
    // let timeDelay = 1000 * 60 * 60;
    let timeDelay = 1000 * 60;
    let reqKey = req.params.key;
    let visitorGrp = {
        value: req.body.value,
        time: new Date().getTime()
    };

    try {
        if (!visitorMap[reqKey]) {
            visitorMap[reqKey] = [visitorGrp];
        } else {
            visitorMap[reqKey].push(visitorGrp);
        }

        visitorMap[reqKey].forEach((obj) => {
            if ((obj.time + timeDelay) < new Date().getTime()) {
                visitorMap[reqKey].splice(obj, 1);
            }
        });

        return res.status(201).send({});
    } catch (error) {
        return res.status().send({ error: error.message, status: error.statusCode });
    }
}

module.exports = {
    getSum,
    postVisitor
};
