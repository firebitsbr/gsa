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

import _ from 'gmp/locale.js';

import PropTypes from '../../utils/proptypes.js';

import EntitiesPage from '../../entities/page.js';
import withEntitiesContainer from '../../entities/withEntitiesContainer.js';

import HelpIcon from '../../components/icon/helpicon.js';
import NewIcon from '../../components/icon/newicon.js';

import Layout from '../../components/layout/layout.js';

import {createFilterDialog} from '../../components/powerfilter/dialog.js';

import Table, {SORT_FIELDS} from './table.js';

import PermissionComponent from './component.js';

const ToolBarIcons = ({
    onPermissionCreateClick,
  }, {capabilities}) => {
  return (
    <Layout flex>
      <HelpIcon
        page="permissions"
        title={_('Help: Permissions')}/>
      {capabilities.mayCreate('permission') &&
        <NewIcon
          title={_('New Permission')}
          onClick={onPermissionCreateClick}/>
      }
    </Layout>
  );
};

ToolBarIcons.propTypes = {
  onPermissionCreateClick: PropTypes.func,
};

ToolBarIcons.contextTypes = {
  capabilities: PropTypes.capabilities.isRequired,
};

const FilterDialog = createFilterDialog({
  sortFields: SORT_FIELDS,
});

const Page = ({
  onChanged,
  onDownloaded,
  ...props
}) => (
  <PermissionComponent
    onCloned={onChanged}
    onDeleted={onChanged}
    onSaved={onChanged}
    onDownloaded={onDownloaded}
  >
    {({
      clone,
      create,
      delete: delete_func,
      download,
      edit,
    }) => (
      <EntitiesPage
        {...props}
        sectionIcon="permission.svg"
        table={Table}
        filterEditDialog={FilterDialog}
        title={_('Permissions')}
        toolBarIcons={ToolBarIcons}
        onPermissionCloneClick={clone}
        onPermissionCreateClick={create}
        onPermissionDeleteClick={delete_func}
        onPermissionDownloadClick={download}
        onPermissionEditClick={edit}
      />
    )}
  </PermissionComponent>
);

Page.propTypes = {
  onChanged: PropTypes.func.isRequired,
  onDownloaded: PropTypes.func.isRequired,
};

export default withEntitiesContainer('permission')(Page);

// vim: set ts=2 sw=2 tw=80:
