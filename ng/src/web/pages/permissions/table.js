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

import _ from 'gmp/locale.js';

import {createEntitiesFooter} from '../../entities/footer.js';
import {createEntitiesHeader} from '../../entities/header.js';
import {createEntitiesTable} from '../../entities/table.js';

import Row from './row.js';

export const SORT_FIELDS = [
  ['name', _('Name')],
  ['description', _('Description')],
  ['type', _('Resource Type')],
  ['_resource', _('Resource')],
  ['subject_type', _('Subject Type')],
  ['_subject', _('Subject')],
];

const Table = createEntitiesTable({
  emptyTitle: _('No permissions available'),
  header: createEntitiesHeader(SORT_FIELDS),
  row: Row,
  footer: createEntitiesFooter({
    download: 'permissions.xml',
    span: 7,
    trash: true,
  }),
});

export default Table;

// vim: set ts=2 sw=2 tw=80:
