import { useDispatch } from "react-redux";
import { logout } from "../../../actions/Auth/auth";
import { refreshTokenService } from "../../../services/Auth";

export default async function refreshToken(args) {
    return await refreshTokenService(args.payload, args.options);
}