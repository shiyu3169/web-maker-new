import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import WidgetHeading from "./WidgetHeading";
import WidgetImage from "./WidgetImage";
import WidgetYouTube from "./WidgetYouTube";

export default function WidgetEdit(props) {
  const params = useParams();
  const history = useHistory();
  const [widget, setWidget] = useState({});

  useEffect(() => {
    setWidget(props.getWidget(params.wgid));
  }, [props, params.wgid]);

  const onChange = e => {
    setWidget({ ...widget, [e.target.name]: e.target.value });
  };

  const remove = () => {
    props.removeWidget(params.wgid);
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`
    );
  };

  const update = () => {
    const newWidget = widget;
    if(newWidget.widgetType === "HEADING" && !widget.size) {
      widget.size = "1";
    }
    if(newWidget.widgetType === "IMAGE" || newWidget.widgetType === "YOUTUBE") {
      if(!newWidget.width) {
        newWidget.width = "100%"; 
      } else {
        newWidget.width += "%";
      }
    }

    if(newWidget.widgetType === "YOUTUBE") {
      // split url with "/"
      const urlArray = newWidget.url.split("/");
      // parse url into embeded version
      newWidget.url = "https://www.youtube.com/embed/" + urlArray[urlArray.length-1];
    }
    props.updateWidget(newWidget);
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`
    );
  };

  if (widget.widgetType === "HEADING") {
    return (
      <WidgetHeading
        widget={widget}
        onChange={onChange}
        remove={remove}
        update={update}
      />
    );
  }

  if (widget.widgetType === "IMAGE") {
    return (
      <WidgetImage
        widget={widget}
        onChange={onChange}
        remove={remove}
        update={update}
      />
    );
  }

  if (widget.widgetType === "YOUTUBE") {
    return (
      <WidgetYouTube
        widget={widget}
        onChange={onChange}
        remove={remove}
        update={update}
      />
    );
  }
  return <div></div>;
}
