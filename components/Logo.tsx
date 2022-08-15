import { memo, FC } from "react";

export type TLogo = {
    color?: string;
}

const Logo : FC<TLogo> = ({color}) => (
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
 x="0px" y="0px" viewBox="0 0 1080 1080" enableBackground="new 0 0 1080 1080"  preserveAspectRatio="xMidYMid meet">
<path fill={color} opacity="1.000000" stroke="none" 
	d="
M499.000000,1081.000000 
	C332.685791,1081.000000 166.871613,1081.000000 1.028704,1081.000000 
	C1.028704,721.060669 1.028704,361.121368 1.028704,1.091017 
	C360.897766,1.091017 720.795532,1.091017 1080.846680,1.091017 
	C1080.846680,360.999939 1080.846680,720.999939 1080.846680,1081.000000 
	C887.120911,1081.000000 693.310486,1081.000000 499.000000,1081.000000 
M575.046631,384.441895 
	C571.616821,386.540375 568.070679,388.473053 564.786133,390.778442 
	C560.504822,393.783478 556.010437,395.705353 550.676575,394.998230 
	C543.127136,393.997345 535.572144,393.031342 528.041687,391.902985 
	C527.293518,391.790863 526.033081,390.523071 526.134583,390.017242 
	C527.232422,384.545868 528.555481,379.119751 529.817017,373.681274 
	C530.334473,373.764282 530.851929,373.847290 531.369385,373.930298 
	C532.099121,375.309906 532.594971,376.902100 533.611816,378.020752 
	C535.260559,379.834686 537.250977,381.338013 539.097168,382.972473 
	C540.399170,380.524200 542.375732,378.205048 542.874023,375.602875 
	C544.246521,368.435974 545.205383,361.171234 545.939636,353.906006 
	C546.651855,346.859375 544.874695,340.062103 535.221985,337.552246 
	C531.413330,336.561951 527.923401,334.403656 524.183594,333.071045 
	C521.530090,332.125519 518.399902,330.587433 516.019043,331.247955 
	C512.204224,332.306274 508.863922,331.304749 505.269531,331.178528 
	C497.879791,330.918976 490.416229,331.323303 483.059998,332.144165 
	C479.286804,332.565186 475.917419,333.433990 472.274750,331.293457 
	C470.960907,330.521423 468.325806,331.107880 466.701630,331.905304 
	C458.964630,335.703796 451.257538,339.598236 443.812531,343.927582 
	C442.277954,344.819977 441.088593,347.735046 441.139374,349.681335 
	C441.380219,358.914490 445.304138,366.906433 451.384216,373.569580 
	C453.255859,375.620819 457.118500,375.770508 459.929871,377.088745 
	C461.136749,377.654602 462.335724,378.803406 462.938446,379.991608 
	C465.307678,384.662354 467.454865,389.446533 469.647827,394.205505 
	C470.349701,395.728638 471.939941,398.020294 471.422485,398.744019 
	C466.600586,405.488373 466.077728,413.452637 464.396698,421.118439 
	C462.260712,430.858826 460.286438,440.513977 464.585754,450.231384 
	C465.212402,451.647827 465.317352,453.598419 464.927216,455.111969 
	C462.430786,464.796936 464.005463,474.393677 464.892426,484.087006 
	C465.732849,493.271667 465.963867,502.544312 465.807434,511.767120 
	C465.763947,514.331909 463.778625,517.180542 461.989807,519.317810 
	C459.809021,521.923401 456.617401,523.677551 454.403473,526.262878 
	C453.082245,527.805786 451.724945,530.696655 452.344421,532.140198 
	C452.981964,533.625793 455.921570,534.408569 457.996735,534.927856 
	C461.414215,535.783142 465.032623,535.875061 468.413025,536.830872 
	C475.479675,538.829102 481.707794,536.324585 483.710297,529.405334 
	C485.404633,523.550903 486.269684,517.395325 486.876160,511.310699 
	C487.226105,507.799713 485.911316,504.143463 486.092621,500.590729 
	C486.459015,493.411530 487.314758,486.256409 488.007294,479.095093 
	C488.457092,474.443665 488.975098,469.798828 489.589172,463.944153 
	C491.541840,466.377228 493.226624,467.880798 494.158691,469.758087 
	C496.298401,474.067566 499.702301,475.308350 504.212067,475.045685 
	C508.019989,474.823914 511.851624,474.959503 515.671814,475.009796 
	C520.942444,475.079163 524.162231,478.135193 523.941467,483.503052 
	C523.546936,493.097412 519.752441,500.645538 511.040955,505.791290 
	C508.568176,507.251923 507.678772,511.393066 506.063232,514.304932 
	C509.126740,515.525391 512.102539,517.143799 515.280701,517.844055 
	C517.970093,518.436584 520.893616,517.966187 523.548828,517.966187 
	C521.922485,525.566528 520.562744,531.920654 519.159241,538.479553 
	C528.916260,540.654419 537.690125,542.220032 546.517334,539.843750 
	C548.287781,539.367188 550.479370,537.053467 550.778687,535.297424 
	C551.247437,532.547546 550.359924,529.535889 549.880066,526.663025 
	C549.351807,523.501160 548.005432,520.347473 548.120850,517.231201 
	C548.436340,508.716461 549.401978,500.227875 549.977844,491.720001 
	C550.422668,485.148102 550.466980,478.542236 551.134277,471.996826 
	C551.313416,470.240051 552.740723,468.039154 554.252258,467.101440 
	C558.108948,464.708710 562.336426,462.913483 565.437134,461.367188 
	C569.357239,465.334778 572.716736,468.600220 575.913635,472.017761 
	C578.061401,474.313721 580.666870,476.537628 581.826111,479.312408 
	C583.286011,482.807129 583.434387,486.840302 584.230652,490.623871 
	C585.633240,497.288300 587.522522,503.868927 584.153076,510.601044 
	C582.734375,513.435669 581.723145,516.600220 581.216431,519.726501 
	C580.789124,522.362427 579.815979,526.096130 583.867371,526.891418 
	C588.018555,527.706360 592.333252,527.862244 596.584167,527.955933 
	C603.747620,528.114014 604.832642,526.014526 603.616516,518.923401 
	C602.462280,512.193176 602.429382,505.264465 602.006409,498.416687 
	C601.580811,491.527008 602.227600,484.415710 600.727539,477.780701 
	C597.763306,464.669830 593.914368,451.735657 589.910217,438.890900 
	C586.875305,429.155243 583.243408,419.586395 579.425781,410.125427 
	C578.227356,407.155273 577.856323,405.384735 580.404175,402.956635 
	C593.172180,390.788910 608.310059,384.731934 625.869690,383.849304 
	C630.383606,383.622406 634.830627,381.623291 639.242249,380.229065 
	C639.998291,379.990112 640.710693,378.751831 640.884949,377.865417 
	C640.985046,377.356384 640.090149,376.316071 639.425964,376.042725 
	C629.061523,371.777466 618.445557,371.071106 607.343262,372.824554 
	C596.010803,374.614349 585.860291,379.231537 575.046631,384.441895 
M498.987152,642.022339 
	C497.783844,643.717346 496.580536,645.412415 494.743561,648.000000 
	C506.184784,648.000000 516.165344,647.807373 526.132996,648.081299 
	C531.117249,648.218262 531.601746,646.001831 530.618286,642.000000 
	C529.178162,642.000000 528.022766,642.003845 526.867371,641.999390 
	C520.450256,641.974487 518.559021,639.487061 520.278931,633.329712 
	C525.022278,616.347961 529.767334,599.366699 534.894470,581.015259 
	C537.885620,589.404541 540.481262,596.582275 543.005249,603.785156 
	C547.769775,617.382080 552.407593,631.024048 557.268372,644.586304 
	C559.803589,651.659912 559.967285,651.601257 566.837219,650.532471 
	C569.898315,639.185181 572.903809,627.858276 576.014832,616.560303 
	C579.632080,603.423828 583.256409,590.287964 587.054077,577.203064 
	C588.545044,572.065979 592.802063,569.093750 597.911194,569.000061 
	C603.214905,568.902710 603.238525,568.873474 602.519226,563.138855 
	C591.578125,563.138855 580.618652,563.138855 569.421570,563.138855 
	C568.963806,564.572571 568.468384,566.058105 568.028442,567.559875 
	C567.942200,567.854187 568.070557,568.211365 568.141235,569.000000 
	C569.731628,569.000000 571.360718,568.988281 572.989563,569.002136 
	C578.247437,569.046875 580.282227,571.390503 578.972900,576.432129 
	C575.868591,588.385193 572.590271,600.293152 569.353394,612.211487 
	C568.173218,616.556946 566.911438,620.880188 565.686890,625.213501 
	C565.339111,625.142578 564.991394,625.071594 564.643616,625.000671 
	C557.231567,604.328430 549.819458,583.656250 542.413147,563.000000 
	C535.820068,563.000000 529.483582,563.236084 523.174561,562.921509 
	C518.556702,562.691162 517.146973,564.399048 518.442139,569.223694 
	C522.244080,569.223694 526.102417,569.223694 530.290833,569.223694 
	C524.417236,590.700867 518.815125,611.607239 512.929932,632.433594 
	C511.282440,638.263855 508.639282,642.926697 498.987152,642.022339 
M668.973267,574.702637 
	C665.507080,567.358459 660.118652,562.136536 651.883362,561.069031 
	C634.843262,558.860107 622.660950,567.298523 613.050354,580.153259 
	C603.890259,592.405457 599.932129,606.491943 601.081360,621.709778 
	C602.219604,636.781677 610.997314,653.107727 631.593262,650.160461 
	C643.209595,648.498230 651.735229,642.463745 658.911865,634.093689 
	C666.961487,624.705688 671.369995,613.380615 672.735107,601.229675 
	C673.713013,592.525208 673.682495,583.572021 668.973267,574.702637 
M493.509369,583.994751 
	C496.794922,570.395447 499.646912,569.293762 510.776733,568.596558 
	C511.211090,566.901917 511.645477,565.207214 512.144043,563.262146 
	C500.645630,563.262146 489.418427,563.262146 478.261963,563.262146 
	C478.261963,565.278137 478.261963,567.027649 478.261963,568.884521 
	C479.161407,568.931763 479.805847,568.987427 480.450897,568.995972 
	C488.822449,569.107666 490.044434,570.444946 487.962311,578.483276 
	C484.101257,593.389771 480.273895,608.316467 475.862915,623.064453 
	C473.334229,631.518921 469.247192,639.217651 460.006226,642.554138 
	C452.776154,645.164673 445.761871,644.975830 439.762054,640.075989 
	C434.374390,635.676086 434.166687,629.584961 435.956726,623.132935 
	C439.946960,608.750854 443.519836,594.251343 447.626862,579.903870 
	C450.689087,569.206299 450.943268,569.281677 461.913544,568.960205 
	C462.225830,568.950989 462.532379,568.744812 462.795532,568.647461 
	C463.023407,567.101257 463.247253,565.582336 463.549225,563.533447 
	C451.157318,563.533447 438.811523,563.533447 426.286713,563.533447 
	C426.030945,564.823853 425.713562,566.425293 425.259125,568.718140 
	C428.970398,568.718140 432.326843,568.718140 436.060883,568.718140 
	C435.912323,570.822021 436.045410,572.314819 435.674591,573.669800 
	C431.613495,588.508972 426.995209,603.215210 423.508331,618.185791 
	C420.769440,629.945068 421.968048,640.631042 433.948364,647.165527 
	C442.376160,651.762207 451.961792,651.392761 461.237762,649.248657 
	C473.040649,646.520569 478.857086,637.769409 481.932831,627.046509 
	C485.956451,613.019043 489.364380,598.814941 493.509369,583.994751 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M575.367554,384.235657 
	C585.860291,379.231537 596.010803,374.614349 607.343262,372.824554 
	C618.445557,371.071106 629.061523,371.777466 639.425964,376.042725 
	C640.090149,376.316071 640.985046,377.356384 640.884949,377.865417 
	C640.710693,378.751831 639.998291,379.990112 639.242249,380.229065 
	C634.830627,381.623291 630.383606,383.622406 625.869690,383.849304 
	C608.310059,384.731934 593.172180,390.788910 580.404175,402.956635 
	C577.856323,405.384735 578.227356,407.155273 579.425781,410.125427 
	C583.243408,419.586395 586.875305,429.155243 589.910217,438.890900 
	C593.914368,451.735657 597.763306,464.669830 600.727539,477.780701 
	C602.227600,484.415710 601.580811,491.527008 602.006409,498.416687 
	C602.429382,505.264465 602.462280,512.193176 603.616516,518.923401 
	C604.832642,526.014526 603.747620,528.114014 596.584167,527.955933 
	C592.333252,527.862244 588.018555,527.706360 583.867371,526.891418 
	C579.815979,526.096130 580.789124,522.362427 581.216431,519.726501 
	C581.723145,516.600220 582.734375,513.435669 584.153076,510.601044 
	C587.522522,503.868927 585.633240,497.288300 584.230652,490.623871 
	C583.434387,486.840302 583.286011,482.807129 581.826111,479.312408 
	C580.666870,476.537628 578.061401,474.313721 575.913635,472.017761 
	C572.716736,468.600220 569.357239,465.334778 565.437134,461.367188 
	C562.336426,462.913483 558.108948,464.708710 554.252258,467.101440 
	C552.740723,468.039154 551.313416,470.240051 551.134277,471.996826 
	C550.466980,478.542236 550.422668,485.148102 549.977844,491.720001 
	C549.401978,500.227875 548.436340,508.716461 548.120850,517.231201 
	C548.005432,520.347473 549.351807,523.501160 549.880066,526.663025 
	C550.359924,529.535889 551.247437,532.547546 550.778687,535.297424 
	C550.479370,537.053467 548.287781,539.367188 546.517334,539.843750 
	C537.690125,542.220032 528.916260,540.654419 519.159241,538.479553 
	C520.562744,531.920654 521.922485,525.566528 523.548828,517.966187 
	C520.893616,517.966187 517.970093,518.436584 515.280701,517.844055 
	C512.102539,517.143799 509.126740,515.525391 506.063232,514.304932 
	C507.678772,511.393066 508.568176,507.251923 511.040955,505.791290 
	C519.752441,500.645538 523.546936,493.097412 523.941467,483.503052 
	C524.162231,478.135193 520.942444,475.079163 515.671814,475.009796 
	C511.851624,474.959503 508.019989,474.823914 504.212067,475.045685 
	C499.702301,475.308350 496.298401,474.067566 494.158691,469.758087 
	C493.226624,467.880798 491.541840,466.377228 489.589172,463.944153 
	C488.975098,469.798828 488.457092,474.443665 488.007294,479.095093 
	C487.314758,486.256409 486.459015,493.411530 486.092621,500.590729 
	C485.911316,504.143463 487.226105,507.799713 486.876160,511.310699 
	C486.269684,517.395325 485.404633,523.550903 483.710297,529.405334 
	C481.707794,536.324585 475.479675,538.829102 468.413025,536.830872 
	C465.032623,535.875061 461.414215,535.783142 457.996735,534.927856 
	C455.921570,534.408569 452.981964,533.625793 452.344421,532.140198 
	C451.724945,530.696655 453.082245,527.805786 454.403473,526.262878 
	C456.617401,523.677551 459.809021,521.923401 461.989807,519.317810 
	C463.778625,517.180542 465.763947,514.331909 465.807434,511.767120 
	C465.963867,502.544312 465.732849,493.271667 464.892426,484.087006 
	C464.005463,474.393677 462.430786,464.796936 464.927216,455.111969 
	C465.317352,453.598419 465.212402,451.647827 464.585754,450.231384 
	C460.286438,440.513977 462.260712,430.858826 464.396698,421.118439 
	C466.077728,413.452637 466.600586,405.488373 471.422485,398.744019 
	C471.939941,398.020294 470.349701,395.728638 469.647827,394.205505 
	C467.454865,389.446533 465.307678,384.662354 462.938446,379.991608 
	C462.335724,378.803406 461.136749,377.654602 459.929871,377.088745 
	C457.118500,375.770508 453.255859,375.620819 451.384216,373.569580 
	C445.304138,366.906433 441.380219,358.914490 441.139374,349.681335 
	C441.088593,347.735046 442.277954,344.819977 443.812531,343.927582 
	C451.257538,339.598236 458.964630,335.703796 466.701630,331.905304 
	C468.325806,331.107880 470.960907,330.521423 472.274750,331.293457 
	C475.917419,333.433990 479.286804,332.565186 483.059998,332.144165 
	C490.416229,331.323303 497.879791,330.918976 505.269531,331.178528 
	C508.863922,331.304749 512.204224,332.306274 516.019043,331.247955 
	C518.399902,330.587433 521.530090,332.125519 524.183594,333.071045 
	C527.923401,334.403656 531.413330,336.561951 535.221985,337.552246 
	C544.874695,340.062103 546.651855,346.859375 545.939636,353.906006 
	C545.205383,361.171234 544.246521,368.435974 542.874023,375.602875 
	C542.375732,378.205048 540.399170,380.524200 539.097168,382.972473 
	C537.250977,381.338013 535.260559,379.834686 533.611816,378.020752 
	C532.594971,376.902100 532.099121,375.309906 531.369385,373.930298 
	C530.851929,373.847290 530.334473,373.764282 529.817017,373.681274 
	C528.555481,379.119751 527.232422,384.545868 526.134583,390.017242 
	C526.033081,390.523071 527.293518,391.790863 528.041687,391.902985 
	C535.572144,393.031342 543.127136,393.997345 550.676575,394.998230 
	C556.010437,395.705353 560.504822,393.783478 564.786133,390.778442 
	C568.070679,388.473053 571.616821,386.540375 575.367554,384.235657 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M499.418396,642.011963 
	C508.639282,642.926697 511.282440,638.263855 512.929932,632.433594 
	C518.815125,611.607239 524.417236,590.700867 530.290833,569.223694 
	C526.102417,569.223694 522.244080,569.223694 518.442139,569.223694 
	C517.146973,564.399048 518.556702,562.691162 523.174561,562.921509 
	C529.483582,563.236084 535.820068,563.000000 542.413147,563.000000 
	C549.819458,583.656250 557.231567,604.328430 564.643616,625.000671 
	C564.991394,625.071594 565.339111,625.142578 565.686890,625.213501 
	C566.911438,620.880188 568.173218,616.556946 569.353394,612.211487 
	C572.590271,600.293152 575.868591,588.385193 578.972900,576.432129 
	C580.282227,571.390503 578.247437,569.046875 572.989563,569.002136 
	C571.360718,568.988281 569.731628,569.000000 568.141235,569.000000 
	C568.070557,568.211365 567.942200,567.854187 568.028442,567.559875 
	C568.468384,566.058105 568.963806,564.572571 569.421570,563.138855 
	C580.618652,563.138855 591.578125,563.138855 602.519226,563.138855 
	C603.238525,568.873474 603.214905,568.902710 597.911194,569.000061 
	C592.802063,569.093750 588.545044,572.065979 587.054077,577.203064 
	C583.256409,590.287964 579.632080,603.423828 576.014832,616.560303 
	C572.903809,627.858276 569.898315,639.185181 566.837219,650.532471 
	C559.967285,651.601257 559.803589,651.659912 557.268372,644.586304 
	C552.407593,631.024048 547.769775,617.382080 543.005249,603.785156 
	C540.481262,596.582275 537.885620,589.404541 534.894470,581.015259 
	C529.767334,599.366699 525.022278,616.347961 520.278931,633.329712 
	C518.559021,639.487061 520.450256,641.974487 526.867371,641.999390 
	C528.022766,642.003845 529.178162,642.000000 530.618286,642.000000 
	C531.601746,646.001831 531.117249,648.218262 526.132996,648.081299 
	C516.165344,647.807373 506.184784,648.000000 494.743561,648.000000 
	C496.580536,645.412415 497.783844,643.717346 499.418396,642.011963 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M669.010376,575.094116 
	C673.682495,583.572021 673.713013,592.525208 672.735107,601.229675 
	C671.369995,613.380615 666.961487,624.705688 658.911865,634.093689 
	C651.735229,642.463745 643.209595,648.498230 631.593262,650.160461 
	C610.997314,653.107727 602.219604,636.781677 601.081360,621.709778 
	C599.932129,606.491943 603.890259,592.405457 613.050354,580.153259 
	C622.660950,567.298523 634.843262,558.860107 651.883362,561.069031 
	C660.118652,562.136536 665.507080,567.358459 669.010376,575.094116 
M625.955139,581.571228 
	C617.441589,596.129639 614.115723,611.962158 615.124512,628.633606 
	C615.476318,634.446533 617.285339,640.356812 623.439392,642.925232 
	C630.259460,645.771790 636.127380,643.144958 641.069031,638.382324 
	C649.728271,630.036621 654.152588,619.197388 656.774170,607.904053 
	C659.043152,598.129639 660.442566,588.001892 658.028015,577.842224 
	C656.117676,569.804382 648.379639,565.044922 640.758179,567.860474 
	C633.976135,570.365967 630.205933,575.534851 625.955139,581.571228 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M493.273254,584.340820 
	C489.364380,598.814941 485.956451,613.019043 481.932831,627.046509 
	C478.857086,637.769409 473.040649,646.520569 461.237762,649.248657 
	C451.961792,651.392761 442.376160,651.762207 433.948364,647.165527 
	C421.968048,640.631042 420.769440,629.945068 423.508331,618.185791 
	C426.995209,603.215210 431.613495,588.508972 435.674591,573.669800 
	C436.045410,572.314819 435.912323,570.822021 436.060883,568.718140 
	C432.326843,568.718140 428.970398,568.718140 425.259125,568.718140 
	C425.713562,566.425293 426.030945,564.823853 426.286713,563.533447 
	C438.811523,563.533447 451.157318,563.533447 463.549225,563.533447 
	C463.247253,565.582336 463.023407,567.101257 462.795532,568.647461 
	C462.532379,568.744812 462.225830,568.950989 461.913544,568.960205 
	C450.943268,569.281677 450.689087,569.206299 447.626862,579.903870 
	C443.519836,594.251343 439.946960,608.750854 435.956726,623.132935 
	C434.166687,629.584961 434.374390,635.676086 439.762054,640.075989 
	C445.761871,644.975830 452.776154,645.164673 460.006226,642.554138 
	C469.247192,639.217651 473.334229,631.518921 475.862915,623.064453 
	C480.273895,608.316467 484.101257,593.389771 487.962311,578.483276 
	C490.044434,570.444946 488.822449,569.107666 480.450897,568.995972 
	C479.805847,568.987427 479.161407,568.931763 478.261963,568.884521 
	C478.261963,567.027649 478.261963,565.278137 478.261963,563.262146 
	C489.418427,563.262146 500.645630,563.262146 512.144043,563.262146 
	C511.645477,565.207214 511.211090,566.901917 510.777100,568.598755 
	C499.646912,569.293762 496.794922,570.395447 493.273254,584.340820 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M626.209961,581.296997 
	C630.205933,575.534851 633.976135,570.365967 640.758179,567.860474 
	C648.379639,565.044922 656.117676,569.804382 658.028015,577.842224 
	C660.442566,588.001892 659.043152,598.129639 656.774170,607.904053 
	C654.152588,619.197388 649.728271,630.036621 641.069031,638.382324 
	C636.127380,643.144958 630.259460,645.771790 623.439392,642.925232 
	C617.285339,640.356812 615.476318,634.446533 615.124512,628.633606 
	C614.115723,611.962158 617.441589,596.129639 626.209961,581.296997 
z"/>
</svg>
);

Logo.defaultProps = {
    color: "#000000",
}

export default memo(Logo);