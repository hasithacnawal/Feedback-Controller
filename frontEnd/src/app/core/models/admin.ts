import { formatDate } from "@angular/common";
import { Organization } from "./organization";
import { Role } from "./role";

export class Admin {
  id: number;
  uuid: string;
  name: string;
  img: string;
  password: string;
  email: string;
  phone: string;
  createdAt: string;
  role: Role;
  Organization: Organization;
  token: string;

  constructor(admins) {
    {
      this.id = admins.id || this.getRandomID();

      this.name = admins.name || "";
      this.email = admins.email || "";
      this.createdAt = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.phone = admins.phone || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
