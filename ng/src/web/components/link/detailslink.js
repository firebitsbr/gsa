/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2017 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import React from 'react';

import PropTypes from '../../utils/proptypes.js';

import LegacyLink from './legacylink.js';
import Link from './link.js';

const DetailsLink = ({
  id,
  legacy = false,
  type,
  page = type,
  textOnly = false,
  ...props
}, {capabilities}) => {

  textOnly = textOnly || !capabilities.mayAccess(type);

  if (legacy) {
    props[type + '_id'] = id;
    return (
      <LegacyLink
        {...props}
        textOnly={textOnly}
        cmd={'get_' + type}
      />
    );
  }
  return (
    <Link
      {...props}
      textOnly={textOnly}
      to={'/' + page + '/' + encodeURIComponent(id)}
    />
  );
};

DetailsLink.contextTypes = {
  capabilities: PropTypes.capabilities.isRequired,
};

DetailsLink.propTypes = {
  id: PropTypes.id.isRequired,
  legacy: PropTypes.bool,
  page: PropTypes.string,
  textOnly: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default DetailsLink;

// vim: set ts=2 sw=2 tw=80:
