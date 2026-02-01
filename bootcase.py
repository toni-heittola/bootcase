import os


def merge(target, override):
    """ Recursive dict merge

    Based on merge method found in dcase_util > https://github.com/DCASE-REPO/dcase_util/blob/master/dcase_util/containers/containers.py#L366

    Parameters
    ----------
    target : dict
        target parameter dict
    override : dict
        override parameter dict

    Returns
    -------
    dict
    """
    from six import iteritems

    for k, v in iteritems(override):
        if k in target and isinstance(target[k], dict) and isinstance(override[k], dict):
            target[k] = merge(target=target[k], override=override[k])

        else:
            target[k] = override[k]

    return target


def str_replace_nested_dict(data, target, new_value):
    if isinstance(data, str):
        return data.replace(target, new_value)

    elif isinstance(data, dict):
        return {k: str_replace_nested_dict(v, target, new_value) for k, v in data.items()}

    elif isinstance(data, list):
        return [str_replace_nested_dict(v, target, new_value) for v in data]

    else:
        return data


def load_yaml(filename, constants=None):
    import yaml

    data = None
    if os.path.exists(filename):
        from distutils.version import LooseVersion
        if LooseVersion(str(yaml.__version__)) >= "5.1":
            with open(filename, 'r') as yaml_file:
                data = yaml.load(yaml_file, Loader=yaml.FullLoader)
        else:
            with open(filename, 'r') as yaml_file:
                data = yaml.load(yaml_file)

    if constants:
        d = data
        for target in constants:
            d = str_replace_nested_dict(data=d, target=target, new_value=constants[target])
        data = d

    return data


def apply_theme_defaults(theme_path, user_settings):
    theme_default_parameters = load_yaml(os.path.join(theme_path, 'theme.defaults.yaml'))
    return merge(
        target=theme_default_parameters,
        override=user_settings
    )


def show_settings(settings):
    import logging
    import pprint
    logger = logging.getLogger(__name__)

    out = pprint.pformat(settings)
    logger.debug('bootcase theme settings')
    logger.debug('====================================')
    logger.debug(out)
