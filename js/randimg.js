//display random image
function randimg() {
    var images = new Array();
    images[0] = "assets\images\CardsDeck - Copy\image (1).png";
    images[1] = "assets\images\CardsDeck - Copy\image (2).png";
    images[2] = "assets\images\CardsDeck - Copy\image (3).png";
    images[3] = "assets\images\CardsDeck - Copy\image (4).png";
    images[4] = "assets\images\CardsDeck - Copy\image (5).png";
    images[5] = "assets\images\CardsDeck - Copy\image (6).png";
    images[6] = "assets\images\CardsDeck - Copy\image (7).png";
    images[7] = "assets\images\CardsDeck - Copy\image (8).png";
    images[8] = "assets\images\CardsDeck - Copy\image (9).png";
    images[9] = "assets\images\CardsDeck - Copy\image (10).png";
    images[10] = "assets\images\CardsDeck - Copy\image (11).png";
    images[11] = "assets\images\CardsDeck - Copy\image (12).png";
    images[12] = "assets\images\CardsDeck - Copy\image (13).png";
    images[13] = "assets\images\CardsDeck - Copy\image (14).png";
    images[14] = "assets\images\CardsDeck - Copy\image (15).png";
    images[15] = "assets\images\CardsDeck - Copy\image (16).png";
    images[16] = "assets\images\CardsDeck - Copy\image (17).png";
    images[17] = "assets\images\CardsDeck - Copy\image (18).png";
    images[18] = "assets\images\CardsDeck - Copy\image (19).png";
    images[19] = "assets\images\CardsDeck - Copy\image (20).png";
    images[20] = "assets\images\CardsDeck - Copy\image (21).png";
    images[21] = "assets\images\CardsDeck - Copy\image (22).png";
    images[22] = "assets\images\CardsDeck - Copy\image (23).png";
    images[23] = "assets\images\CardsDeck - Copy\image (24).png";
    images[24] = "assets\images\CardsDeck - Copy\image (25).png";
    images[25] = "assets\images\CardsDeck - Copy\image (26).png";
    images[26] = "assets\images\CardsDeck - Copy\image (27).png";
    images[27] = "assets\images\CardsDeck - Copy\image (28).png";
    images[28] = "assets\images\CardsDeck - Copy\image (29).png";
    images[29] = "assets\images\CardsDeck - Copy\image (30).png";
    images[30] = "assets\images\CardsDeck - Copy\image (31).png";
    images[31] = "assets\images\CardsDeck - Copy\image (32).png";
    images[32] = "assets\images\CardsDeck - Copy\image (33).png";
    images[33] = "assets\images\CardsDeck - Copy\image (34).png";
    images[34] = "assets\images\CardsDeck - Copy\image (35).png";
    images[35] = "assets\images\CardsDeck - Copy\image (36).png";
    images[36] = "assets\images\CardsDeck - Copy\image (37).png";
    images[37] = "assets\images\CardsDeck - Copy\image (38).png";
    images[38] = "assets\images\CardsDeck - Copy\image (39).png";
    images[39] = "assets\images\CardsDeck - Copy\image (40).png";
    images[40] = "assets\images\CardsDeck - Copy\image (41).png";
    images[41] = "assets\images\CardsDeck - Copy\image (42).png";
    images[42] = "assets\images\CardsDeck - Copy\image (43).png";
    images[43] = "assets\images\CardsDeck - Copy\image (44).png";
    images[44] = "assets\images\CardsDeck - Copy\image (45).png";
    images[45] = "assets\images\CardsDeck - Copy\image (46).png";
    images[46] = "assets\images\CardsDeck - Copy\image (47).png";
    images[47] = "assets\images\CardsDeck - Copy\image (48).png";
    images[48] = "assets\images\CardsDeck - Copy\image (49).png";
    images[49] = "assets\images\CardsDeck - Copy\image (50).png";
    images[50] = "assets\images\CardsDeck - Copy\image (51).png";
    images[51] = "assets\images\CardsDeck - Copy\image (52).png";
    images[52] = "assets\images\CardsDeck - Copy\image (53).png";
    images[53] = "assets\images\CardsDeck - Copy\image (54).png";
    images[54] = "assets\images\CardsDeck - Copy\image (55).png";
    images[55] = "assets\images\CardsDeck - Copy\image (56).png";
    images[56] = "assets\images\CardsDeck - Copy\image (57).png";
    images[57] = "assets\images\CardsDeck - Copy\image (58).png";
    images[58] = "assets\images\CardsDeck - Copy\image (59).png";
    images[59] = "assets\images\CardsDeck - Copy\image (60).png";
    images[60] = "assets\images\CardsDeck - Copy\image (61).png";
    images[61] = "assets\images\CardsDeck - Copy\image (62).png";
    images[62] = "assets\images\CardsDeck - Copy\image (63).png";
    images[63] = "assets\images\CardsDeck - Copy\image (64).png";
    images[64] = "assets\images\CardsDeck - Copy\image (65).png";
    images[65] = "assets\images\CardsDeck - Copy\image (66).png";
    images[66] = "assets\images\CardsDeck - Copy\image (67).png";
//display image name
//select random image and create variable
var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById("output").innerHTML = images;