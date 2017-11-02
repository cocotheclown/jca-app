import moment from 'moment';

export default class EventsData {
    url = 'https://graph.facebook.com/v2.7/169621830258/events/attending/?fields=id,name,description,place,timezone,start_time,cover&access_token=1731188350544201%7CUc9s88m57TTdl07VcACPD4Boluo&since=01012017';
    events = null

    constructor() {
        this.refresh();
    }

    async refresh() {
        let response = await fetch(this.url);
        this.events = response.json();
    }

    _getEventById(id) {
        let events = this.events,
            event = null;

        events.some(function(element) {
            if (element.id === id) {
                event = element;
                return true;
            }

            return false;
        });

        return event;
    }

    _formatEvent(event) {
        let location = event.place.location;

        return {
            id: event.id,
            name: event.name,
            description: event.description,
            start_time: moment(event.start_time),
            location: `${event.place}\n${location.street}\n${location.city}\n${location.zip}`
        };
    }

    async getAll() {
        let events = [];

        if (this.events === null) {
            await this.refresh();
        }

        this.events.forEach((element) => {
            events.push(this._formatEvent(element));
        });

        return events;
    }

    async getEvent(id) {
        let event;

        if (this.events === null) {
            await this.refresh();
        }

        event = this._getEventById(id);

        return this._formatEvent(event);
    }
}