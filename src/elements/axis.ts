import { Input } from "../input";
import { Force, Magnitude } from "../math";

export class Axis extends Input<Force> {
  public state: Force = 0;

  public get active(): boolean {
    return this.magnitude > this.threshold;
  }

  public get force(): Force {
    return this.state;
  }

  public get magnitude(): Magnitude {
    return Math.abs(this.state);
  }
}
