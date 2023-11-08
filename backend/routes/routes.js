import { addNewWriter, getWriters, getWriterWithID, updateWriter, deleteWriter } from '../controllers/writerController';

const routes = (app) => {
    app.route('/writers')
    // GET endpoint
        .get(getWriters)
    // POST endpoint
        .post(addNewWriter);

    app.route('/writers/:WriterId')
    // GET specific writer
        .get(getWriterWithID)
    // UPDATE a specific writer
        .put(updateWriter)
        // DELETE a specific writer
        .delete(deleteWriter);
}

export default routes;