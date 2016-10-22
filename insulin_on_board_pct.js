//
// The MIT License (MIT)
//
// Copyright (c) 2015 Perceptus.org
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
//
//  .88888.  dP                            888888ba
// d8'   `88 88                            88    `8b
// 88        88 dP    dP .d8888b. .d8888b. 88     88 dP    dP 88d888b.
// 88   YP88 88 88    88 88'  `"" 88'  `88 88     88 88    88 88'  `88
// Y8.   .88 88 88.  .88 88.  ... 88.  .88 88    .8P 88.  .88 88    88
//  `88888'  dP `88888P' `88888P' `88888P' 8888888P  `8888P88 dP    dP
//                                                        .88
//                                                    d8888P
// dP                    888888ba                                                 dP
// 88                    88    `8b                                                88
// 88d888b. dP    dP    a88aaaa8P' .d8888b. 88d888b. .d8888b. .d8888b. 88d888b. d8888P dP    dP .d8888b.    .d8888b. 88d888b. .d8888b.
// 88'  `88 88    88     88        88ooood8 88'  `88 88'  `"" 88ooood8 88'  `88   88   88    88 Y8ooooo.    88'  `88 88'  `88 88'  `88
// 88.  .88 88.  .88     88        88.  ... 88       88.  ... 88.  ... 88.  .88   88   88.  .88       88 dP 88.  .88 88       88.  .88
// 88Y8888' `8888P88     dP        `88888P' dP       `88888P' `88888P' 88Y888P'   dP   `88888P' `88888P' 88 `88888P' dP       `8888P88
//               .88                                                   88                                                          .88
//           d8888P                                                    dP                                                      d8888P
//
// Education is crucial in the treatment of complex and dynamic diseases such as T1D. When patients are aware of the elements that affect
// variations in their disease, they are able to better understand their situation enabling them to optimize their treatments.
//
// Accessibility through the primary method of communication in the present: Digital communication. Live data should be accessible when
// the patient needs it in the easiest possible way.
//
// Autonomy is the dream of every patient with T1D. Life does not happen while being in front of a computer or staring at data on your
// phone. Most of the times where deviations happen, patients are busy living their lives.
//
// Gustavo Muñoz ( @bustavo )
// Kenneth Stack
//

// insulin_duration in hours
// curves based on walsh iob curves
function insulin_on_board_pct(time_from_bolus, insulin_duration) {  
  
  if( time_from_bolus <= 0.0 ) {
  
    percentage = 100.0
  
  } else if ( time_from_bolus >= insulin_duration * 60.0 ) {
  
    percentage = 0.0
  
  } else {
  
    if ( insulin_duration == 3 ) {
  
      percentage = -3.203e-7 * Math.pow(time_from_bolus,4) + 1.354e-4 * Math.pow(time_from_bolus,3) - 1.759e-2 * Math.pow(time_from_bolus,2) + 9.255e-2 * time_from_bolus + 99.951
  
    } else if ( insulin_duration == 3.5 ) {
  
      percentage = -0.000000159 * Math.pow(time_from_bolus,4) + 0.000087168 * Math.pow(time_from_bolus,3) - 0.014898990 * Math.pow(time_from_bolus,2) + 0.282046657 * time_from_bolus + 99.924242424
  
    } else if ( insulin_duration == 4 ) {
  
      percentage = -3.31e-8 * Math.pow(time_from_bolus,4) + 2.53e-5 * Math.pow(time_from_bolus,3) - 5.51e-3 * Math.pow(time_from_bolus,2) - 9.086e-2 * time_from_bolus + 99.95
  
    } else if ( insulin_duration == 5 ) {
  
      percentage = -2.95e-8 * Math.pow(time_from_bolus,4) + 2.32e-5 * Math.pow(time_from_bolus,3) - 5.55e-3 * Math.pow(time_from_bolus,2) + 4.49e-2 * time_from_bolus + 99.3
  
    } else if ( insulin_duration == 6 ) {
  
      percentage = -1.493e-8 * Math.pow(time_from_bolus,4) + 1.413e-5 * Math.pow(time_from_bolus,3) - 4.095e-3 * Math.pow(time_from_bolus,2) + 6.365e-2 * time_from_bolus + 99.7
  
    } 
  
  }
  
  if (percentage > 100) {
  
    percentage = 100;
  
  }
  
  return(percentage);

}

// 3 hour, 20 minute interval data points:
//  0   - 100%
//  20  - 95.797952%
//  40  - 83.354632%
//  60  - 67.27531199999999%
//  80  - 50.984312%
//  100 - 36.67599999999999%
//  120 - 25.314791999999983%
//  140 - 16.635152000000033%
//  160 - 9.141592000000088%
//  180 - 0%

// 3.5 hour, 20 minute interval data points:
//  0   - 100%
//  20  - 100%
//  40  - 92.539436704%
//  60  - 79.978325844%
//  80  - 65.25181498399999%
//  100 - 50.407008123999994%
//  120 - 36.88044926399999%
//  140 - 25.498122403999957%
//  160 - 16.475451543999995%
//  180 - 9.417300684000026%
//  200 - 3.317973824000049%
//  210 - 0%

// 4 hour, 20 minute interval data points:
//  0   - 100%
//  20  - 96.125904%
//  40  - 89.034064%
//  60  - 79.698224%
//  80  - 69.015024%
//  100 - 57.754000000000005%
//  120 - 46.55758399999999%
//  140 - 35.94110399999998%
//  160 - 26.292783999999997%
//  180 - 17.873744000000002%
//  200 - 10.81799999999997%
//  220 - 5.132463999999942%
//  240 - 0%

// 5 hour, 20 minute interval data points:
//  0   - 100%
//  20  - 98.15888%
//  40  - 93.62528%
//  60  - 86.64287999999999%
//  80  - 78.04208%
//  100 - 68.53999999999999%
//  120 - 58.74048%
//  140 - 49.13408%
//  160 - 40.098079999999996%
//  180 - 31.896479999999983%
//  200 - 24.680000000000035%
//  220 - 18.486080000000015%
//  240 - 13.238880000000023%
//  260 - 8.749280000000013%
//  280 - 4.714880000000036%
//  300 - 0%

// 6 hour, 20 minute interval data points:
//  0   - 100%
//  20  - 99.4456512%
//  40  - 96.5600992%
//  60  - 91.6355872%
//  80  - 85.2070272%
//  100 - 77.75200000000001%
//  120 - 69.69075520000001%
//  140 - 61.386211200000005%
//  160 - 53.14395520000001%
//  180 - 45.21224320000001%
//  200 - 37.78200000000004%
//  220 - 30.986819200000042%
//  240 - 24.902963200000016%
//  260 - 19.549363200000002%
//  280 - 14.887619200000003%
//  300 - 10.822000000000045%
//  320 - 7.199443200000033%
//  340 - 3.8095552000001334%
//  360 - 0%
