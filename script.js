var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width;
var startGame = document.getElementById("StartGame");
var gameOverVar = document.getElementById("GameOver");
var restartBtn = document.getElementById("Restart");
var nextBtn = document.getElementById("NextLvl");
canvas.width = width = window.innerWidth * 0.6;
canvas.height = height = window.innerHeight;


var img2 = new Image();
img2.src = 'https://wallpaperscraft.com/image/patterns_background_dark_texture_55277_3840x2400.jpg';

var img3 = new Image();
img3.src = 'https://opengameart.org/sites/default/files/metalpreview.png';

var targetImage = new Image();
targetImage.src = "http://www.trmillermill.com/Specialty%20Photos/Log%20Cabin.jpg";

var targetImageStr = new Image();
targetImageStr.src = "https://www.muralswallpaper.co.uk/app/uploads/log-cabin-texture%EF%BB%BF-plain-1-820x532.jpg";

var strongestImage = new Image();
strongestImage.src = "https://slm-assets3.secondlife.com/assets/10078618/view_large/Sales_Watermark_1.jpg?1406902413";
var brick = {
    x: width / 2 - 60,
    y: height - 40,
    vx: 16,
    brickWidth: width / 5,
    draw() {
        ctx.drawImage(img3, this.x, this.y, this.brickWidth, 20);
    }
};
var sides = {
    xl: 0,
    yl: 0,
    xr: width - 20,
    yr: 0,
    xt: 0,
    yt: 0,
    draw() {
        ctx.drawImage(img3, this.xl, this.yl, 20, height);
        ctx.drawImage(img3, this.xr, this.yr, 20, height);
        ctx.drawImage(img3, this.xt, this.yt, width, 20);
    }
}

var ball = {
    x: width / 2,
    y: height / 2,
    vx: 3,
    vy: 6,
    radius: 15,
    color: 'rgb(191, 191, 191)',
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

var left;
var right;
window.onkeydown = function (e) {
    if (e.keyCode === 65 || e.keyCode === 37) {
        left = true;
    } else if (e.keyCode === 68 || e.keyCode === 39) {
        right = true;
    }

}
window.onkeyup = function (e) {
    if (e.keyCode === 65 || e.keyCode === 37) {
        left = false;
    } else if (e.keyCode === 68 || e.keyCode === 39) {
        right = false;
    }
}

var numberTargetsRows;
var numberTargetColumns;


function Target(image, x, y, targetWidth, targetHeight, exists, strong) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.targetWidth = targetWidth;
    this.targetHeight = targetHeight;
    this.exists = exists;
    this.strong = strong;
}

function Bonus(image, x, yC, velY, bonusWidth, bonusHeight, exists) {
    this.image = image;
    this.x = x;
    this.yC = yC;
    this.velY = velY;
    this.bonusWidth = bonusWidth;
    this.bonusHeight = bonusHeight;
    this.exists = exists;
}

var targets = [];
var currentLvl = 0;
var numberBonusesDown;
var numberBonusesUp;
var nrTargetsDestroyed = 0;

function level1() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 1;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 6;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height / 2;
    for (var i = 1; i < numberTargetsRows; i++) {
        for (var j = 0; j < numberTargetColumns; j++) {
            var target = new Target(
                targetImage,
                j * (width - 40) * 10 / 100 + 30,
                i * 50,
                (width - 40) * 8 / 100,
                40,
                true,
                1
            )
            targets.push(target);
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();
}

function level2() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 2;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 8;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height / 5 * 3;
    for (var i = 1; i < numberTargetsRows; i++) {
        if (i % 2 === 1) {
            for (var j = 0; j < numberTargetColumns; j++) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
        }
        if (i % 2 === 0) {
            for (var j = 0; j < numberTargetColumns; j++) {
                if (j >= 0 && j < numberTargetColumns - 1) {
                    if (j % 4 === 0) {
                        var target = new Target(
                            targetImageStr,
                            j * (width - 40) * 10 / 100 + 37 + (width - 40) * 4 / 100,
                            i * 50,
                            (width - 40) * 8 / 100,
                            40,
                            true,
                            2
                        )
                        targets.push(target);
                    } else {
                        var target = new Target(
                            targetImage,
                            j * (width - 40) * 10 / 100 + 37 + (width - 40) * 4 / 100,
                            i * 50,
                            (width - 40) * 8 / 100,
                            40,
                            true,
                            1
                        )
                        targets.push(target);
                    }
                }
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();
}

function level3() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 3;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 7;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height / 5 * 3;
    for (var i = 1; i < numberTargetsRows + 3; i++) {
        for (var j = 0; j < numberTargetColumns; j++) {
            if (i < 4 && j !== 4 && j !== 5) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
            if (i < 4 && j === 4 || i < 4 && j === 5) {
                var target = new Target(
                    targetImageStr,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    2
                )
                targets.push(target);
            }
        }
        for (var j = 0; j < numberTargetColumns; j++) {
            if (i === 4 && j === 2 || i === 4 && j === 7 || i === 8 && j === 2 || i === 8 && j === 7) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
            if (i === 5 && j != 0 && j != 4 && j != 5 && j != 9 || i === 7 && j != 0 && j != 4 && j != 5 && j != 9) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
            if (i === 6 && j !== 2 && j !== 7) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
            if (i === 6 && j === 2 || i === 6 && j === 7) {
                var target = new Target(
                    targetImageStr,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    2
                )
                targets.push(target);
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();
}

function level4() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 4;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 7;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height - 100;
    for (var i = 1; i < numberTargetsRows; i++) {
        for (var j = 0; j < numberTargetColumns; j++) {
            if (i % 2 === 0) {
                var target = new Target(
                    targetImageStr,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 70,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    2
                )
                targets.push(target);
            }
            if (i % 2 === 1) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 70,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();
}

function level5() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 5;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 9;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height - 100;
    for (var i = 1; i < numberTargetsRows; i++) {
        if (i === 1 || i === 8) {
            for (var j = 0; j < numberTargetColumns; j++) {
                if (j !== 3 && j !== 4 && j !== 5 && j !== 6) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        targetImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        1
                    )
                    targets.push(target);
                }

            }
        }
        if (i === 2 || i === 7) {
            for (var j = 0; j < numberTargetColumns; j++) {
                if (j !== 0 && j !== 4 && j !== 5 && j !== 9) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        targetImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        1
                    )
                    targets.push(target);
                }
            }
        }
        if (i === 3 || i === 6) {
            for (var j = 0; j < numberTargetColumns; j++) {
                if (j !== 0 && j !== 1 && j !== 8 && j !== 9) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        targetImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        1
                    )
                    targets.push(target);
                }
            }
        }
        if (i === 4 || i === 5) {
            for (var j = 0; j < numberTargetColumns; j++) {
                if (j === 3 || j === 6) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else if (j === 4 || j === 5) {
                    var target = new Target(
                        strongestImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        3
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        targetImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        1
                    )
                    targets.push(target);
                }
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();

}

function level6() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 6;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 9;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height - 100;
    for (var i = 1; i < numberTargetsRows; i++) {
        for (var j = 0; j < numberTargetColumns; j++) {
            if (i === 1 || i === 8) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
            if (i === 2 || i === 7) {
                var target = new Target(
                    targetImageStr,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 50,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    2
                )
                targets.push(target);
            }
            if (i === 3 || i === 6) {
                if (j > 0 && j < 9) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        targetImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        1
                    )
                    targets.push(target);
                }
            }
            if (i === 4 || i === 5) {
                if (j === 2 || j === 1 || j === 8 || j === 7) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else if (j === 0 || j === 9) {
                    var target = new Target(
                        targetImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        1
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        strongestImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 50,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        3
                    )
                    targets.push(target);
                }
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
        console.log(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
        console.log(down);
    }
    timer = 59;
    draw();
}

function level7() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 7;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 8;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height - 100;
    for (var i = 1; i < numberTargetsRows; i++) {
        for (var j = 0; j < numberTargetColumns; j++) {
            if (i % 3 === 1) {
                var target = new Target(
                    targetImageStr,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 70,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    2
                )
                targets.push(target);
            }
            if (i % 3 === 0) {
                var target = new Target(
                    targetImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 70,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    1
                )
                targets.push(target);
            }
            if (i % 3 === 2) {
                var target = new Target(
                    strongestImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 70,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    3
                )
                targets.push(target);
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();
}

function level8() {
    while(bonusUp.length !== 0){
        bonusUp.pop();
    }
    while(bonusDown.length !== 0){
        bonusDown.pop();
    }
    for (var j = 0; j < bonusUpObjectArr.length; j++) {
        if (bonusUpObjectArr[j].exists === true) {
            bonusUpObjectArr[j].exists = false;
        }
    }
    for (var j = 0; j < bonusDownObjectArr.length; j++) {
        if (bonusDownObjectArr[j].exists === true) {
            bonusDownObjectArr[j].exists = false;
        }
    }
    while (targets.length !== 0) {
        targets.pop();
    }
    currentLvl = 8;
    brick.x = width / 2 - brick.brickWidth / 2;
    numberTargetsRows = 9;
    numberTargetColumns = 10;
    ball.vx = 3;
    ball.vy = 6;
    ball.x = width / 2;
    ball.y = height - 100;
    for (var i = 1; i < numberTargetsRows; i++) {
        for (var j = 0; j < numberTargetColumns; j++) {
            if (i === 1 || i === 8 || i === 4) {
                var target = new Target(
                    strongestImage,
                    j * (width - 40) * 10 / 100 + 30,
                    i * 60,
                    (width - 40) * 8 / 100,
                    40,
                    true,
                    3
                )
                targets.push(target);
            }
            if (i === 2 || i === 3) {
                if (j === 2 || j === 3 || j === 6 || j === 7) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 60,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        strongestImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 60,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        3
                    )
                    targets.push(target);
                }
            }
            if (i === 5 || i === 7) {
                if (j > 1 && j < 8) {
                    var target = new Target(
                        strongestImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 60,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        3
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 60,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                }
            }
            if (i === 6) {
                if (j === 2 || j === 4 || j === 5 || j === 7) {
                    var target = new Target(
                        targetImageStr,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 60,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        2
                    )
                    targets.push(target);
                } else {
                    var target = new Target(
                        strongestImage,
                        j * (width - 40) * 10 / 100 + 30,
                        i * 60,
                        (width - 40) * 8 / 100,
                        40,
                        true,
                        3
                    )
                    targets.push(target);
                }
            }
        }
    }
    nrTargetsDestroyed = 0;
    numberBonusesUp = 2;
    numberBonusesDown = 2;
    for (var i = 0; i < numberBonusesDown; i++) {
        var up = random(targets.length);
        bonusUp.push(up);
    }
    for (var i = 0; i < numberBonusesDown; i++) {
        var down = random(targets.length);
        bonusDown.push(down);
    }
    timer = 59;
    draw();
}

function restart() {
    if (currentLvl === 1) {
        level1();
    } else if (currentLvl === 2) {
        level2();
    } else if (currentLvl === 3) {
        level3();
    } else if (currentLvl === 4) {
        level4();
    } else if (currentLvl === 5) {
        level5();
    } else if (currentLvl === 6) {
        level6();
    } else if (currentLvl === 7) {
        level7();
    } else if (currentLvl === 8) {
        level8();
    }
}

function nextLevel() {
    if (currentLvl === 1) {
        level2();
    } else if (currentLvl === 2) {
        level3();
    } else if (currentLvl === 3) {
        level4();
    } else if (currentLvl === 4) {
        level5();
    } else if (currentLvl === 5) {
        level6();
    } else if (currentLvl === 6) {
        level7();
    } else if (currentLvl === 7) {
        level8();
    }
}

function gameOver() {
    canvas.style.visibility = "hidden";
    startGame.style.visibility = "hidden";
    gameOverVar.style.display = "block";
}

function random(max) {
    this.max = max;
    return Math.floor(Math.random() * max);
}
var bonusUp = [];
var bonusDown = [];

var bonusUpImage = new Image();
bonusUpImage.src = 'https://www.freeiconspng.com/uploads/plus-sign-icon-15.png';
var bonusUpObjectArr = [];
var bonusDownImage = new Image();
bonusDownImage.src = 'https://png.icons8.com/metro/1600/delete-sign.png';
var bonusDownObjectArr = [];
var timer = 59;

var startBallVx = random(2);
if (startBallVx === 1) {
    ball.vx = -ball.vx
};

function draw() {
    if (timer < 220) {
        timer++;
        if (timer % 60 === 0) {
            canvas.style.visibility = "visible";
            canvas.style.cursor = 'none';
            startGame.style.visibility = "hidden";
            gameOverVar.style.display = "none";
            ctx.drawImage(img2, 0, 0, width, height);
            ball.draw();
            for (var i = 0; i < targets.length; i++) {
                if (targets[i].exists === true) {
                    ctx.drawImage(targets[i].image, targets[i].x, targets[i].y, targets[i].targetWidth, targets[i].targetHeight);
                }
            }
            brick.draw();
            sides.draw();
            ctx.font = '88px serif';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillStyle = "rgb191, 191, 191)"
            ctx.fillText(4 - timer / 60, width / 2, height / 3 * 2);
        }
    }
    if (timer % 220 === 0) {
        canvas.style.visibility = "visible";
        canvas.style.cursor = 'none';
        startGame.style.visibility = "hidden";
        gameOverVar.style.display = "none";
        ctx.drawImage(img2, 0, 0, width, height);
        ball.draw();
        for (var i = 0; i < targets.length; i++) {
            if (targets[i].exists === true) {
                ctx.drawImage(targets[i].image, targets[i].x, targets[i].y, targets[i].targetWidth, targets[i].targetHeight);
                if (ball.x + ball.radius > targets[i].x && ball.x - ball.radius < targets[i].x + targets[i].targetWidth &&
                    ball.y - ball.radius > targets[i].y + targets[i].targetHeight + ball.vy && ball.y + ball.vy - ball.radius < targets[i].y + targets[i].targetHeight && ball.vy < 0) {
                    for (var nr = 0; nr < bonusUp.length; nr++) {
                        if (i === bonusUp[nr] && targets[i].strong === 1) {
                            var bonusUpObject = new Bonus(
                                bonusUpImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                3,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusUpObjectArr.push(bonusUpObject);
                        }
                    }
                    for (var nr = 0; nr < bonusDown.length; nr++) {
                        if (i === bonusDown[nr] && targets[i].strong === 1) {
                            var bonusDownObject = new Bonus(
                                bonusDownImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                4,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusDownObjectArr.push(bonusDownObject)
                        }
                    }

                    ball.vy = -ball.vy;
                    if (targets[i].strong === 1) {
                        targets[i].exists = false;
                        nrTargetsDestroyed++;
                    } else if (targets[i].strong === 2) {
                        targets[i].strong = 1;
                        targets[i].image = targetImage;
                    } else if (targets[i].strong === 3) {
                        targets[i].strong = 2;
                        targets[i].image = targetImageStr;
                    };
                } else if (ball.x + ball.radius > targets[i].x && ball.x - ball.radius < targets[i].x + targets[i].targetWidth &&
                    ball.y + ball.vy + ball.radius > targets[i].y && ball.y + ball.radius < targets[i].y + ball.vy && ball.vy > 0) {
                    for (var nr = 0; nr < bonusUp.length; nr++) {
                        if (i === bonusUp[nr] && targets[i].strong === 1) {
                            var bonusUpObject = new Bonus(
                                bonusUpImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                3,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusUpObjectArr.push(bonusUpObject);
                        }
                    }
                    for (var nr = 0; nr < bonusDown.length; nr++) {
                        if (i === bonusDown[nr] && targets[i].strong === 1) {
                            var bonusDownObject = new Bonus(
                                bonusDownImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                4,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusDownObjectArr.push(bonusDownObject)
                        }
                    }

                    ball.vy = -ball.vy;
                    if (targets[i].strong === 1) {
                        targets[i].exists = false;
                        nrTargetsDestroyed++;
                    } else if (targets[i].strong === 2) {
                        targets[i].strong = 1;
                        targets[i].image = targetImage;
                    } else if (targets[i].strong === 3) {
                        targets[i].strong = 2;
                        targets[i].image = targetImageStr;
                    };
                } else if (ball.vx > 0 && ball.y > targets[i].y - ball.radius && ball.y < targets[i].y + targets[i].targetHeight + ball.radius &&
                    ball.x + ball.vx + ball.radius > targets[i].x && ball.x + ball.radius < targets[i].x + ball.vx) {
                    ball.vx = -ball.vx;
                    if (targets[i].strong === 1) {
                        targets[i].exists = false;
                        nrTargetsDestroyed++;
                    } else if (targets[i].strong === 2) {
                        targets[i].strong = 1;
                        targets[i].image = targetImage;
                    } else if (targets[i].strong === 3) {
                        targets[i].strong = 2;
                        targets[i].image = targetImageStr;
                    };
                    for (var nr = 0; nr < bonusUp.length; nr++) {
                        if (i === bonusUp[nr] && targets[i].strong === 1) {
                            var bonusUpObject = new Bonus(
                                bonusUpImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                3,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusUpObjectArr.push(bonusUpObject);
                        }
                    }
                    for (var nr = 0; nr < bonusDown.length; nr++) {
                        if (i === bonusDown[nr] && targets[i].strong === 1) {
                            var bonusDownObject = new Bonus(
                                bonusDownImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                4,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusDownObjectArr.push(bonusDownObject)
                        }
                    }
                } else if (ball.vx < 0 && ball.y > targets[i].y - ball.radius && ball.y < targets[i].y + targets[i].targetHeight + ball.radius &&
                    ball.x + ball.vx - ball.radius < targets[i].x + targets[i].targetWidth && ball.x - ball.radius > targets[i].x + ball.vx + targets[i].targetWidth) {
                    ball.vx = -ball.vx;
                    if (targets[i].strong === 1) {
                        targets[i].exists = false;
                        nrTargetsDestroyed++;
                    } else if (targets[i].strong === 2) {
                        targets[i].strong = 1;
                        targets[i].image = targetImage;
                    } else if (targets[i].strong === 3) {
                        targets[i].strong = 2;
                        targets[i].image = targetImageStr;
                    };
                    for (var nr = 0; nr < bonusUp.length; nr++) {
                        if (i === bonusUp[nr] && targets[i].strong === 1) {
                            var bonusUpObject = new Bonus(
                                bonusUpImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                3,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusUpObjectArr.push(bonusUpObject);
                        }
                    }
                    for (var nr = 0; nr < bonusDown.length; nr++) {
                        if (i === bonusDown[nr] && targets[i].strong === 1) {
                            var bonusDownObject = new Bonus(
                                bonusDownImage,
                                targets[i].x + targets[i].targetWidth / 4,
                                targets[i].y,
                                4,
                                targets[i].targetWidth * 2 / 3,
                                targets[i].targetHeight,
                                true
                            )
                            bonusDownObjectArr.push(bonusDownObject)
                        }
                    }
                }
            }

        }
        if (bonusUpObjectArr.length >= 0) {
            for (var j = 0; j < bonusUpObjectArr.length; j++) {
                if (bonusUpObjectArr[j].exists === true) {
                    ctx.drawImage(bonusUpImage, bonusUpObjectArr[j].x, bonusUpObjectArr[j].yC, bonusUpObjectArr[j].bonusWidth, bonusUpObjectArr[j].bonusHeight);
                    bonusUpObjectArr[j].yC += bonusUpObjectArr[j].velY;
                    if (bonusUpObjectArr[j].yC > canvas.height) {
                        bonusUpObjectArr[j].exists = false;
                    }
                    if (bonusUpObjectArr[j].yC + bonusUpObjectArr[j].velY + bonusUpObjectArr[j].bonusHeight > brick.y && bonusUpObjectArr[j].yC + bonusUpObjectArr[j].velY + bonusUpObjectArr[j].bonusHeight < brick.y + 20 && bonusUpObjectArr[j].x + bonusUpObjectArr[j].bonusWidth > brick.x && bonusUpObjectArr[j].x - bonusUpObjectArr[j].bonusWidth < brick.x + brick.brickWidth) {
                        bonusUpObjectArr[j].exists = false;
                        if (ball.vy > 4 || ball.vy < -4) {
                            ball.vy = ball.vy - ball.vy * 0.2;
                            ball.vx = ball.vx - ball.vx * 0.2;
                        }
                    }
                }
            }
        };
        if (bonusDownObjectArr.length >= 0) {
            for (var j = 0; j < bonusDownObjectArr.length; j++) {
                if (bonusDownObjectArr[j].exists === true) {
                    ctx.drawImage(bonusDownImage, bonusDownObjectArr[j].x, bonusDownObjectArr[j].yC, bonusDownObjectArr[j].bonusWidth, bonusDownObjectArr[j].bonusHeight);
                    bonusDownObjectArr[j].yC += bonusDownObjectArr[j].velY;
                    if (bonusDownObjectArr[j].yC > canvas.height) {
                        bonusDownObjectArr[j].exists = false;
                    }
                    if (bonusDownObjectArr[j].yC + bonusDownObjectArr[j].velY + bonusDownObjectArr[j].bonusHeight > brick.y && bonusDownObjectArr[j].yC + bonusDownObjectArr[j].velY + bonusDownObjectArr[j].bonusHeight < brick.y + 20 && bonusDownObjectArr[j].x + bonusDownObjectArr[j].bonusWidth > brick.x && bonusDownObjectArr[j].x - bonusDownObjectArr[j].bonusWidth < brick.x + brick.brickWidth) {
                        bonusDownObjectArr[j].exists = false;
                        if (ball.vy < 14 && ball.vy > -14) {
                            ball.vy = ball.vy + ball.vy * 0.2;
                            ball.vx = ball.vx + ball.vx * 0.2;
                        }
                    }
                }
            }
        };
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx *= 1.0001;
        ball.vy *= 1.0001;
        brick.draw();
        sides.draw();
        if (ball.x + ball.vx > canvas.width - 35 ||
            ball.x + ball.vx < 35) {
            ball.vx = -ball.vx;
        };
        if (ball.y + ball.vy < 35 || ball.y - ball.radius > height) {
            ball.vy = -ball.vy;
        } else if (ball.x > brick.x && ball.x < brick.x + brick.brickWidth && ball.y + ball.vy > height - 55 && ball.y < height - 55 + ball.vy) {
            ball.vy = -ball.vy;
        } else if (ball.y + ball.vy + ball.radius > brick.y && ball.y + ball.radius < brick.y + 10 &&
            ball.x + ball.radius > brick.x && ball.x + ball.radius < brick.x + 20 && ball.vx > 0 && left === true && ball.vy < 14 && ball.vy > -14) {
            ball.vx = -ball.vx * 1.5;
            ball.vy = -ball.vy * 1.5;
        } else if (ball.y + ball.vy + ball.radius > brick.y && ball.y + ball.radius < brick.y + 10 &&
            ball.x + ball.radius > brick.x && ball.x + ball.radius < brick.x + 20 && ball.vx > 0 && left === false) {
            ball.vx = -ball.vx;
            ball.vy = -ball.vy;
        } else if (ball.y + ball.radius > brick.y && ball.y + ball.radius < brick.y + 10 &&
            ball.x + ball.radius > brick.x && ball.x + ball.radius < brick.x + 20 && ball.vx < 0 && left === true) {
            ball.vy = -ball.vy;
        } else if (ball.y + ball.radius > brick.y + 10 && ball.y + ball.radius < brick.y + 20 &&
            ball.x + ball.radius > brick.x && ball.x + ball.radius < brick.x + 20 && ball.vx < 0 && left === true) {
            ball.vx = -brick.vx - ball.vx;
        } else if (ball.y + ball.vy + ball.radius > brick.y + 10 && ball.y - ball.radius < brick.y + 20 &&
            ball.x + ball.vx + ball.radius > brick.x && ball.x + ball.radius < brick.x + 20 && ball.vx > 0 && left === true) {
            ball.vx = -brick.vx + ball.vx;
        } else if (ball.y + ball.vy + ball.radius > brick.y + 10 && ball.y - ball.radius < brick.y + 20 &&
            ball.x + ball.vx + ball.radius > brick.x && ball.x + ball.radius < brick.x + 20 && ball.vx > 0 && left === false) {
            ball.vx = -ball.vx;
        } else if (ball.y + ball.vy + ball.radius > brick.y && ball.y + ball.radius < brick.y + 10 &&
            ball.x - ball.radius < brick.x + brick.brickWidth && ball.x - ball.radius > brick.x + brick.brickWidth - 20 && ball.vx < 0 && right === true && ball.vy < 14 && ball.vy > -14) {
            ball.vx = -ball.vx * 1.5;
            ball.vy = -ball.vy * 1.5;
        } else if (ball.y + ball.vy + ball.radius > brick.y && ball.y + ball.radius < brick.y + 10 &&
            ball.x - ball.radius < brick.x + brick.brickWidth && ball.x - ball.radius > brick.x + brick.brickWidth - 20 && ball.vx < 0 && right === false) {
            ball.vx = -ball.vx;
            ball.vy = -ball.vy;
        } else if (ball.y + ball.vy + ball.radius > brick.y + 10 && ball.y + ball.vy - ball.radius < brick.y + 20 &&
            ball.x + ball.radius < brick.x + brick.brickWidth && ball.x + ball.radius > brick.x + brick.brickWidth - 20 && ball.vx < 0 && right === true) {
            ball.vx = brick.vx - ball.vx;
        } else if (ball.y + ball.vy + ball.radius > brick.y + 10 && ball.y + ball.vy - ball.radius < brick.y + 20 &&
            ball.x + ball.radius < brick.x + brick.brickWidth && ball.x + ball.radius > brick.x + brick.brickWidth - 20 && ball.vx < 0 && right === false) {
            ball.vx = -ball.vx;
        } else if (ball.y + ball.radius + ball.vy > brick.y && ball.y + ball.radius < brick.y + 10 &&
            ball.x + ball.radius < brick.x + brick.brickWidth && ball.x + ball.radius > brick.x + brick.brickWidth - 20 && ball.vx > 0 && right === true) {
            ball.vy = -ball.vy;
        } else if (ball.y + ball.radius + ball.vy > brick.y + 10 && ball.y - ball.radius < brick.y + 20 &&
            ball.x + ball.radius < brick.x + brick.brickWidth && ball.x + ball.radius > brick.x + brick.brickWidth - 20 && ball.vx > 0 && right === true) {
            ball.vx = brick.vx + ball.vx * 0.5;
        }

        if (left === true && brick.x - brick.vx > 11) {
            brick.x -= brick.vx;
        } else if (right === true && brick.x + brick.vx < width - brick.brickWidth - 11) {
            brick.x += brick.vx;
        };
    }
    if (ball.y - ball.radius < height && nrTargetsDestroyed !== targets.length) {
        window.requestAnimationFrame(draw);
    } else if (nrTargetsDestroyed === targets.length && currentLvl !== 8) {
        gameOver();
        nextBtn.style.display = "block";
        restartBtn.style.display = "none";
    } else {
        restartBtn.style.display = "block";
        nextBtn.style.display = "none";
        gameOver();
    }
};