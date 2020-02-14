export class RequestItemMin {
  senderUserId;
  senderUserName;
  bookId;
  bookName;
  bookImage;
  status;

  constructor(_senderUserName, _bookName, _bookImage) {
    this.senderUserName = _senderUserName;
    this.bookName = _bookName;
    this.bookImage = _bookImage;
  }
}
