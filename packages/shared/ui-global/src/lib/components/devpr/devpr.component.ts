import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// prettier-ignore
@Component({
  selector: 'devmx-devpr',
  template: `
    <svg viewBox="0 0 1090 1040" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M480.132 1013.49L26.49 580.794C-8.83001 547.105 -8.83001 491.657 26.49 457.968L480.132 25.2672C515.452 -8.4224 573.583 -8.4224 608.903 25.2672L1062.54 457.968C1097.86 491.657 1097.86 547.105 1062.54 580.794L608.903 1013.49C597.638 1024.24 583.946 1031.56 569.409 1035.45C549.784 1040.7 528.643 1039.71 509.841 1032.49C498.883 1028.27 488.723 1021.94 480.132 1013.49Z" fill="#2ec44b"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M847.221 383C817.42 383 792.769 406.512 792.769 434.938C792.769 457.749 808.59 478.103 831.032 484.771V581.277C831.032 636.023 794.977 666.203 714.035 678.486L687.177 682.346C643.027 690.066 605.867 703.051 576.434 721.65V602.057L576.802 595.001V569.383C592.254 556.398 613.961 548.327 643.763 544.817H644.131C695.271 537.448 721.393 514.286 721.393 476.736V420.236C744.94 414.621 762.968 394.267 762.968 369.702C762.968 340.925 738.317 317.413 708.516 317.413C678.715 317.413 654.064 340.925 654.064 370.053C654.064 394.969 672.828 416.025 697.111 420.938V477.087C697.111 503.056 680.187 516.392 640.451 522.358C614.697 525.165 593.726 531.482 577.17 541.308V349.736C597.037 338.506 610.282 318.152 610.282 294.99C610.282 259.897 580.481 231.12 543.321 231.12C506.53 231.12 476.361 259.546 476.361 294.99C476.361 318.503 489.606 338.857 509.473 349.736V473.303C494.388 466.285 476.361 461.372 455.021 458.915C405.353 451.896 399.098 431.542 399.098 414.347V374.691C423.013 369.427 441.408 348.722 441.408 323.806C441.408 295.38 416.758 271.868 386.957 271.868C357.155 271.868 332.505 295.029 332.505 323.455C332.505 348.371 350.901 368.725 374.815 374.34V413.996C374.815 451.545 400.57 474.356 451.71 481.375C476.361 484.884 495.124 490.148 509.473 499.623V625.53C475.257 604.825 432.21 591.139 378.495 584.822C295.713 572.89 258.922 543.061 258.922 487.262V465.154C280.629 458.135 296.081 438.834 296.081 415.672C296.081 387.247 271.431 363.734 241.629 363.734C211.828 363.734 187.178 387.247 187.178 415.672C187.178 438.483 202.63 458.135 224.337 465.154V487.262C224.337 527.971 240.158 559.906 271.799 582.014C295.713 599.21 329.194 610.44 373.712 616.757H374.08C433.682 624.126 477.832 640.269 509.841 665.536V1032.65C509.841 1032.65 523.97 1039.06 543.873 1039.06C563.776 1039.06 577.906 1032.76 577.906 1032.76V858.94L577.17 830.865V762.71C605.867 738.495 644.866 722.703 696.375 714.281L721.761 710.772C763.704 704.104 795.712 692.874 818.891 676.38C850.532 654.271 866.353 622.336 866.353 581.628V484.771C886.22 477.401 901.305 458.1 901.305 435.289C901.305 421.603 895.786 408.618 885.852 398.441C875.55 388.615 861.938 383 847.221 383ZM707.78 337.065C689.017 337.065 673.564 351.804 673.564 370.053C673.564 387.599 689.384 402.689 707.78 402.689C726.544 402.689 741.997 388.301 741.997 370.053C741.997 351.804 726.912 337.065 707.78 337.065ZM352.005 323.455C352.005 341.352 367.457 356.092 386.221 356.092C404.617 356.092 420.437 341.352 420.437 323.455C420.437 305.557 404.985 290.818 386.221 290.818C367.457 290.818 352.005 305.206 352.005 323.455ZM206.677 414.97C206.677 433.219 222.13 447.607 240.894 447.607C259.289 447.607 275.11 432.868 275.11 414.97C275.11 397.073 259.657 382.333 240.894 382.333C222.13 382.333 206.677 396.722 206.677 414.97ZM495.86 294.288C495.86 318.854 516.831 338.857 542.586 338.857C568.34 338.857 589.311 318.503 589.311 293.937C589.311 269.372 568.34 249.369 542.586 249.369C516.831 249.369 495.86 269.372 495.86 294.288ZM813.005 435.289C813.005 453.187 828.089 467.926 847.221 467.926C865.985 467.926 881.437 453.187 881.437 434.938C881.437 426.516 878.494 418.444 871.871 412.127C865.249 406.162 856.419 402.652 847.221 402.652C828.457 402.652 813.005 417.391 813.005 435.289Z" fill="#FAF8F9"/>
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host svg {
      animation: rotate-in-center 1.2s ease-in-out 0.2s infinite alternate both;
    }

    @keyframes rotate-in-center {
      0% {
        transform: rotate(-900deg);
        opacity: 0;
      }
      100% {
        transform: rotate(0);
        opacity: 1;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DevPRComponent {
  active = input(false);
}