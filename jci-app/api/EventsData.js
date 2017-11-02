import moment from 'moment';

export default class EventsData {
    url = 'https://graph.facebook.com/v2.7/169621830258/events/attending/?fields=id,name,description,place,timezone,start_time,cover&access_token=1731188350544201%7CUc9s88m57TTdl07VcACPD4Boluo&since=01012017';
    events = null

    constructor() {
        this.refresh();
    }

    async refresh() {
        let response = await fetch(this.url),
            body = await response.json();
        this.events = body.data;
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
        let locData = event.place && event.place.location?event.place.location:{},
            location = [];
        
        if (event.place && event.place.name) {
            location.push(event.place.name);
        }

        ['street', 'city', 'zip'].forEach((prop) => {
            if (locData[prop]) {
                 location.push(locData[prop]);
            }
        });

        return {
            id: event.id,
            name: event.name,
            description: event.description,
            start_time: moment(event.start_time),
            location: location.join('\n')
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