import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <div className="book">
    <div className="info">
      <div className="genre">{category}</div>
      <div className="title">{title}</div>
      <div className="author">Kent C Dods</div>
      <div className="cta">
        <button type="button"> Comments</button>
        <button type="button" onClick={() => { handleRemoveBook({ id, title, category }); }}> Delete </button>
        <button type="button"> Edit</button>
      </div>
    </div>
    <div className="prog_indicator">
      <div className="indicator">
        <div className="ring">
          <div className="outer-ring center" />
          <div className="inner-ring center" />
        </div>
      </div>
      <div className="indicator_text">
        <div className="number">
          64%
        </div>
        Completed
      </div>
    </div>
    <div className="cur_chapter">
      <div className="cur_chapter_heading">CURRENT CHAPTER</div>
      <div className="name">The door </div>
      <div className="cta">
        <button type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </div>
);
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
