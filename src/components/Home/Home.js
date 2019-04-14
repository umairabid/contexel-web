import { getUser } from "../../utils/storage";

export default {
  data() {
    return {
      user: getUser()
    }
  }
}