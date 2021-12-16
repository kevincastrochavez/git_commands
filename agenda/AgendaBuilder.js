export default class AgendaBuilder {
  costructor(dataPath) {
    this.dataPath = dataPath;
    this.data = {};
  }

  async init() {
    await this.getDataFunction();
    console.log(this.data);
  }

  async getDataFunction() {
    try {
      const res = await fetch(this.dataPath);

      if (res.ok) {
        this.data = await res.json();
      } else {
        throw new Error('Server not found');
      }
    } catch (err) {
      console.log(err);
    }
  }

  renderTracks(tracks) {}

  renderCourses(courses) {}
}
