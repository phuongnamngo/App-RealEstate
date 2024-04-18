const useHistoryDetail = () => {
    const statusHistory = (item) => {
        switch (item) {
            case 1:
                return "Hoàn thành"
                break;
            case 2:
                return "Đã hủy"
                break;
            default:
                break;
        }
    }
    return { statusHistory };
}
export default useHistoryDetail;