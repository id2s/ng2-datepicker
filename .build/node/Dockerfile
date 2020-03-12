ARG VERSION

FROM bitnami/node:${VERSION}

USER root

ARG UID=1000
ARG GID=1000

RUN usermod -u ${UID} daemon
RUN groupmod -g ${GID} daemon

RUN mkdir /home/daemon
RUN chown -R daemon:daemon /home/daemon
RUN usermod -d /home/daemon daemon
RUN chown -R daemon:daemon /opt/bitnami/

USER daemon

RUN npm install -g @angular/cli@1.4.4

RUN npm install -g node-sass

RUN npm install -g webpack
